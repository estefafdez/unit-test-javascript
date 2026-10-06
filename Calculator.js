var Calculator = {
    suma: function (num1, num2) {
        return num1 + num2;
    },
    resta: function (num1, num2) {
        return num1 - num2;
    },
    multiplicacion: function (num1, num2) {
        return num1 * num2;
    },
    division: function (num1, num2) {
        return num2 && num1/num2;
    }
};

// Allow the calculator to be loaded from Node.js (npm test) without breaking the browser usage
if (typeof module !== "undefined" && module.exports) {
    module.exports = Calculator;
}
