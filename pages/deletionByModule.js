"use strict";

const today = new Date();

const currentMonth = today.getMonth();
const monthNames = [
    "Януари", "Февруари", "Март", "Април", "Май", "Юни",
    "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
];
const monthName = monthNames[currentMonth];

const daysInMonth = new Date(today.getFullYear(), currentMonth + 1, 0).getDate();

console.log(`Четни дати в текущия месец ${monthName} са:`);
for (let i = 1; i <= daysInMonth; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}