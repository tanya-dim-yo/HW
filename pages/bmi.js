"use strict";

function calculateBMI(weight, height) {
    return weight / (height * height);
}

let weight = parseFloat(prompt("Въведете тегло в килограми:"));
let height = parseFloat(prompt("Въведете височина в метри:"));

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    console.log("Невалидни тегло или височина!");
} else {
    let bmi = calculateBMI(weight, height);
    console.log("Вашият индекс на телесна маса е: " + bmi.toFixed(2));
}