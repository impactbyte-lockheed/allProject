const number1 = 12;
const number2 = 13;
let total = number1 + number2;
const listNumber = [2, 5, 6, 4, 2];
const listName = ["Jaka", "Miftah", "Faris", "Thoriq", "Nana"];

const multipleNumber = (number1, number2) => {
    return number1 * number2;
};

const result = listNumber.map(number => {
    return number * 2;
});

const filtered = listNumber.filter(element => {
    return element === 2;
});

const filteredName = listName.filter(element => {
    return element.toLocaleLowerCase() === "miftah";
});

const sorted = listName.sort(function(a, b) {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
    return 0;
});

console.log(sorted);
