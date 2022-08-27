/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl= document.getElementById("length-el")
let length2El = document.getElementById("length2-el")
let length3El = document.getElementById("length3-el")



const meterToFeet =3.281
const feetToMeter = 0.3048
const litreToGallon = 0.264
const gallonToLitre = 3.78541
const kiloToPound = 2.204
const poundToKilo = 0.453592

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet |
    ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(2)} meters`
    length2El.textContent = `${baseValue} liters = ${(baseValue * litreToGallon).toFixed(2)} gallons | ${baseValue} gallons = ${(baseValue * gallonToLitre).toFixed(2)} litres `
    length3El.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(2)} pounds |
    ${baseValue} pounds = ${(baseValue * poundToKilo).toFixed(2)} kilos`
})
