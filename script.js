// Append value to display
function appendValue(value) {
    document.getElementById("display1").value += value;
}

// Clear all the values
function AC() {
    document.getElementById("display1").value = "";
    document.getElementById("display2").value = "";
}

// Perform modulus operation
function mod() {
    let num1 = Number(document.getElementById("display1").value);
    let num2 = Number(document.getElementById("display2").value);
    let result = num1 % num2;
    document.getElementById("display1").value = result;
}

// Perform division
function div() {
    let num1 = Number(document.getElementById("display1").value);
    let num2 = Number(document.getElementById("display2").value);
    if (num2 !== 0) {
        let result = num1 / num2;
        document.getElementById("display1").value = result;
    } else {
        alert("Cannot divide by zero");
    }
}

// Perform multiplication
function mul() {
    let num1 = Number(document.getElementById("display1").value);
    let num2 = Number(document.getElementById("display2").value);
    let result = num1 * num2;
    document.getElementById("display1").value = result;
}

// Perform subtraction
function sub() {
    let num1 = Number(document.getElementById("display1").value);
    let num2 = Number(document.getElementById("display2").value);
    let result = num1 - num2;
    document.getElementById("display1").value = result;
}

// Perform addition
function add() {
    let num1 = Number(document.getElementById("display1").value);
    let num2 = Number(document.getElementById("display2").value);
    let result = num1 + num2;
    document.getElementById("display1").value = result;
}

// Calculate the result
function calculate() {
    let result = eval(document.getElementById("display1").value);
    document.getElementById("display1").value = result;
}
