"use strict";

let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'peach', 'strawberry', 'melon', 'watermelon'];
let newFruits = [];

for (let i = 0; i < fruits.length; i++) {
    if (i % 2 !== 0) {
        newFruits.push(fruits[i]);
    }
}

console.log(newFruits);