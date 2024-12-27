document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("wordMachineForm");
    const esperantoWordSpan = document.getElementById("esperantoWord");
    const translationSpan = document.getElementById("translation");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        
        fetch("http://localhost:3000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                
                esperantoWordSpan.textContent = result.esperantoWord;
                translationSpan.textContent = result.translation;
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Something went wrong!");
            });
    });
});
