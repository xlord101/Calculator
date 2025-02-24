function AC(){

    let display1 = document.getElementById('display1');
    display1.value = '';
    let display2 = document.getElementById('display2');
    display2.value = '';

}

function DEL(){

    let display1 = document.getElementById('display1');
    display1.value = display1.value.slice(0, -1);

    let display2 = document.getElementById('display2');
    display2.value = display2.value.slice(0, -1);

}

function add(){

    let firstNumber = Number(document.getElementById('display1').value);
    let secondNumber = Number(document.getElementById('display2').value);

    let result = firstNumber + secondNumber;

    alert("Addition is : " + result);
}

function sub(){

    let firstNumber = Number(document.getElementById('display1').value);
    let secondNumber = Number(document.getElementById('display2').value);

    let result = firstNumber - secondNumber;

    alert("Substraction is : " + result);
}

function mult(){

    let firstNumber = Number(document.getElementById('display1').value);
    let secondNumber = Number(document.getElementById('display2').value);

    let result = firstNumber * secondNumber;

    alert("Multiplication is : " + result);
}

function div(){

    let firstNumber = Number(document.getElementById('display1').value);
    let secondNumber = Number(document.getElementById('display2').value);

    let result = firstNumber / secondNumber;

    alert("Division is : " + result);
}

function mod(){

    let firstNumber = Number(document.getElementById('display1').value);
    let secondNumber = Number(document.getElementById('display2').value);

    let result = firstNumber % secondNumber;

    alert("Modulus is : " + result);
}
