document.getElementById("convert-btn").addEventListener("click", function () {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    if (amount === "") {
        alert("Veuillez entrer un montant.");
        return;
    }

    const apiKey = 'VOTRE_API_KEY'; // Remplacez par votre clé API
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.result === "success") {
                const rate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount * rate).toFixed(2);

                document.getElementById("result").innerHTML = 
                    `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
            } else {
                alert("Erreur lors de la récupération des taux de change.");
            }
        })
        .catch(error => {
            console.error("Erreur:", error);
            alert("Une erreur est survenue. Veuillez réessayer plus tard.");
        });
});
