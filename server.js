const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios"); 
const path = require("path"); 

const app = express();
const PORT = 80;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); 

// Route to serve the HTML file
app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/generate", async (req, res) => {
    try {
        const { choose_prefix, choose_root, choose_suffix, choose_declension } = req.body;

        // Combine the word
        const esperantoWord = `${choose_prefix}${choose_root}${choose_suffix}${choose_declension}`;

        // Translate the word using an API
        const translation = await translateWord(esperantoWord);

        // Send the result back to the frontend
        res.json({
            esperantoWord,
            translation,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to process request" });
    }
});

async function translateWord(word) {
    const API_URL = "https://api.mymemory.translated.net/get";
    const response = await axios.get(API_URL, {
        params: {
            q: word,
            langpair: "eo|en",
        },
    });

    // Extract translation
    return response.data.responseData.translatedText || "Translation not available";
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});