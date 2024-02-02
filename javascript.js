let currentValue = 0;
let showValue = 0;
const visor = document.querySelector('.visor');
let firstNumber = "";
let secondNumber = "";
let operationSelected = "";
let inSecondNumber = false;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    if(button.id == "clear")
    {
        button.addEventListener('click', function()
        {
            clearCalc();
        });
    }
    else if(button.id == "equals")
    {
        button.addEventListener('click', function()
        {
            equalsTo(button.id);
        });
    }
    else if(button.id == "mult" || button.id == "min"|| button.id == "plus" || button.id == "divided")
    {
        button.addEventListener('click', function()
        {
            operations(button.id);
        });
    }
    else
    {
        button.addEventListener('click', function()
        {
            number(button.id);
        });
    }
  });


function operations(operationType)
{
    if(inSecondNumber)
    {
        equalsTo();
    }
    operationSelected = operationType;
    inSecondNumber = true;
}

function number(numberValue)
{
    if(!inSecondNumber)
    {
        firstNumber += ""+numberValue;
        showValue = firstNumber;
    }
    else
    {
        secondNumber += ""+numberValue;
        showValue = secondNumber;
    }
    updateVisor();
}

function equalsTo()
{
    if(operationSelected == "plus")
    {
        currentValue = add(firstNumber, secondNumber);
    }
    else if(operationSelected == "min")
    {
        currentValue = add(firstNumber, -secondNumber);
    }
    else if(operationSelected == "mult")
    {
        currentValue = multiply(firstNumber, secondNumber);
    }
    else if(operationSelected == "divided")
    {
        currentValue = multiply(firstNumber, 1/secondNumber);
    }
    secondNumber = "";
    firstNumber = "" + currentValue;
    showValue = "" + currentValue;
    inSecondNumber = false;
    updateVisor();
}

function clearCalc()
{
    firstNumber = "";
    secondNumber = "";
    operationSelected = "";
    currentValue = "";
    showValue = "0";
    inSecondNumber = false;
    updateVisor();
}

function updateVisor()
{
    visor.textContent = showValue;   
}

function add(num1, num2)
{
    return (+num1)+ (+num2);
}

function multiply(num1, num2)
{
    return (+num1) * (+num2);
}