op = "";
firstValue = 0;

function opreation(opr) {
    //save current value from p in variable as copy by slice function
    val = document.querySelector("#display").innerHTML.slice();
    if (val != "" && firstValue == 0) {
        firstValue = val
    }
    //If the user chooses (=!) (an equals) operation after the second number, the function calculates the result and considers it the first number
    if (op != "" && val != "") {
        console.log("Vb ", firstValue)

        firstValue = calc()
        console.log("V", firstValue)
    }
    // Take the operation and save it in the variable
    op = opr;
    let fao = firstValue + op;
    //Print first value with the operator in the top
    document.querySelector("#display2").innerHTML = fao
    clearScreen()
}

function calc() {
    //Take the second value from the current value
    let secondValue = document.querySelector("#display").innerHTML;
    //Declare result =0
    let result = 0;
    switch (op) {
        case '+':
            result = +firstValue + (+secondValue);
            break;
        case '-':
            result = +firstValue - (+secondValue);
            break;
        case '*':
            result = +firstValue * (+secondValue);
            break;
        case '/':
            result = +firstValue / (+secondValue);
            break;
        case '%':
            result = +firstValue % (+secondValue);
            break;
    }
    //Print Result
    document.querySelector('#display').innerHTML = result;
    clearScreen2();
    op = ""
    return result
}

/*document.getElementsByClassName("demo")*/

//Print All Number
function numFunction(value) {
    document.querySelector("#display").innerHTML += value;
}

/*------------------------------------------Delete Value------------------------------------------------*/
function clearScreen() {
    document.querySelector("#display").innerHTML = "";
}

function clearScreen2() {
    document.querySelector("#display2").innerHTML = "";
}

function clearAllScreens() {
    clearScreen2();
    clearScreen();
    firstValue = 0;
    op = "";
}

function deletenum() {
    const before = document.querySelector("#display").innerHTML.slice(0, -1);
    console.log(before);
    document.querySelector("#display").innerHTML = before;
}
