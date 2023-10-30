import FetchWrapper from "./fetch-wrapper.js";

const API = new FetchWrapper("https://v6.exchangerate-api.com/v6/75ef48d52936a09d49d02055");

const base = document.querySelector("#base-currency");
const target = document.querySelector("#target-currency");
const result = document.querySelector("#conversion-result");

const getConversionRates = (value) => {
    console.log("New currency selected");
    API.get(`/latest/${base.value}`).then(data => {
        console.log(data.conversion_rates);
        console.log(data.conversion_rates[target.value]);
        result.textContent = data.conversion_rates[target.value];
    })
}

base.addEventListener("change", event => {
    getConversionRates(base.value);
})

target.addEventListener("change", event => {
    getConversionRates(target.value);
})