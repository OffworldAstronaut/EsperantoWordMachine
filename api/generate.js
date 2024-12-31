const axios = require("axios");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        const { choose_prefix, choose_root, choose_suffix, choose_declension } = req.body;

        const esperantoWord = `${choose_prefix}${choose_root}${choose_suffix}${choose_declension}`;
        const translation = await translateWord(esperantoWord);

        res.json({
            esperantoWord,
            translation,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process request" });
    }
};

async function translateWord(word) {
    const API_URL = "https://api.mymemory.translated.net/get";
    const response = await axios.get(API_URL, {
        params: {
            q: word,
            langpair: "eo|en",
        },
    });

    return response.data.responseData.translatedText || "Translation not available";
}
