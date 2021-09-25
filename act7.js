//Global variables
var prevCalc = 0;
var calc = "";

window.onload = function() {
    document.getElementById("btn0").onclick = showNum;
    document.getElementById("btn1").onclick = showNum;
    document.getElementById("btn2").onclick = showNum;
    document.getElementById("btn3").onclick = showNum;
    document.getElementById("btn4").onclick = showNum;
    document.getElementById("btn5").onclick = showNum;
    document.getElementById("btn6").onclick = showNum;
    document.getElementById("btn7").onclick = showNum;
    document.getElementById("btn8").onclick = showNum;
    document.getElementById("btn9").onclick = showNum;
    document.getElementById("btnPlus").onclick = add;
    document.getElementById("btnMinus").onclick = subtract;
    document.getElementById("btnTimes").onclick = multiply;
    document.getElementById("btnDecimal").onclick = showNum;
    document.getElementById("btnDecrement").onclick = decrement;
    document.getElementById("btnIncrement").onclick = increment;
    document.getElementById("btnRound").onclick = round;
    document.getElementById("btnDivide").onclick = divide;
    document.getElementById("btnSqrt").onclick = sqrt;
    document.getElementById("btnPow").onclick = power;
    document.getElementById("btnPow2").onclick = square;
    document.getElementById("btnReset").onclick = clear;
    document.getElementById("btnCalc").onclick = calculate;
    document.getElementById("btnFloor").onclick = floor;
}

//The following function displays a number in the textfield when a number is clicked.
function showNum(value) {
    document.frmCalc.txtNumber.value += this.value;
}

//The following function decreases the value of displayed number by 1.
function decrement() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num--;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function increases the value of displayed number by 1.
function increment() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        num++;
        document.frmCalc.txtNumber.value = num;
    }
}

//The following function is called when “sqrt” button is clicked.
function sqrt() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var sqrtvalue = Math.sqrt(num);
        document.frmCalc.txtNumber.value = sqrtvalue;
    }
}

//The following function is called when “floor” button is clicked.
function floor() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var floorvalue = Math.floor(num);
        document.frmCalc.txtNumber.value = floorvalue;
    }
}

//The following function is called when “round” button is clicked.
function round() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var roundvalue = Math.round(num);
        document.frmCalc.txtNumber.value = roundvalue;
    }
}

//The following function is called when “square” button is clicked.
function square() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        var powvalue = Math.pow(num, 2);
        document.frmCalc.txtNumber.value = powvalue;
    }
}

//The following function is called when “Add” button is clicked.
function add() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Add";
    }
}

//The following function is called when “Subtract” button is clicked.
function subtract() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}

//The following function is called when “Multiply” button is clicked.
function multiply() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc= "Multiply";
    }
}

//The following function is called when “Divide” button is clicked.
function divide() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}


//The following function is called when “Power” button is clicked.
function power() {
    var num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }
}

//The following function is called when “Calculate” button is clicked.
//if states according to function called
function calculate() {

    var num = parseFloat(document.frmCalc.txtNumber.value);

    if (!(isNaN(num))) {
        var total = 0;
        //takes 2 numbers and add
        if (calc == "Add") {
            total = prevCalc + num;
            document.frmCalc.txtNumber.value = total;
        //take 2 numbers and subtract
        } else if (calc == "Subtract"){
            total = prevCalc - num;
            document.frmCalc.txtNumber.value = total;
        //take 2 numbers and multiply
        } else if (calc == "Multiply"){
            total = prevCalc * num;
            document.frmCalc.txtNumber.value = total;
        //take 2 numbers and divide
        } else if (calc == "Divide"){
            total = prevCalc / num;
            document.frmCalc.txtNumber.value = total;
        //take 2 numbers and put the second number as exponent
        } else if (calc == "Power") {
            total = Math.pow(prevCalc, num);
            document.frmCalc.txtNumber.value = total;
        }
        document.frmCalc.txtNumber.value = total;

    }
}
//The following function is called when "clear" button is clicked.
//removes everything
function clear() {
    document.frmCalc.txtNumber.value = "";
    prevCalc = 0;
    calc ="";
}

