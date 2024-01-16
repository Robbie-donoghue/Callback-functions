// logs a string to the console to tell user the function was called
function notifyUser()
{
    console.log("notifyUser function was called!")
}
//accepts function as an argument to run when it has done it's work

function myAwesomeFunction(notifyUserCallback)
{
    console.log("Running myAwesomeFunction ... ")
    console.log("Running Tasks")
    notifyUserCallback();
}
//run the awesomeFunction, and pass the notifyUser function into it
myAwesomeFunction(notifyUser)

function myCoolFunction(onCompleteCallback)
{
    console.log("Running myCoolFunction")
    console.log("Complex task complete. I will notify user")
    onCompleteCallback()
}
myCoolFunction(function()
{
    console.log("Notify user function was called!")
}
)

//define functions
function add (a, b)
{
    return a + b
}
//define functions
function multiply ( a, b )
{
    return a * b
}
//define calc function 
function myCalculatorFunction(a,b, operationCallback)
{
    console.log("Doing a calculation using the numbers: " , a , b)
    console.log("We might have code that saves the result to a log or database")
    return operationCallback(a,b)
}

const result = myCalculatorFunction (1,2, add)
console.log(result) //output 3

const result2 = myCalculatorFunction( 2, 3, multiply)
console.log(result2) //output 6

//add two results together
const finalResult = myCalculatorFunction(result, result2, add)
console.log(finalResult) //output 9 
