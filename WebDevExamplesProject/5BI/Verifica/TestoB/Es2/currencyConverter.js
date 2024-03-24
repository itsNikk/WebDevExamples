document.getElementById('currency-form').addEventListener('submit', function (e) {
    e.preventDefault();
    convertCurrency();
});

function getExchangeRate(currency) {
    const exchangeRates = {
        USD: {EUR: 0.85},
        EUR: {USD: 1.18},
    };
    return exchangeRates[currency];
}

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const exchangeRates = getExchangeRate(fromCurrency);
    const exchangeRate = exchangeRates[toCurrency];

    const result = amount * exchangeRate;
    document.getElementById('result').textContent =
        amount + " " + fromCurrency + " = " + result + " " + toCurrency

}