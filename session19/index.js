// console.log("Hello World!");
// [SECTION 1] Parameterized functions
// Sysntax:
// function functionName(parameter1, parameter2, ...parameterN) {
//     // code to be executed
// }

function greeting() {
    let userInput = prompt("What is your name?");
    console.log("Hello " + userInput + "!");
}

// greeting(); sample fuction calling using basic function


// function with parameters
// name -> is our parameter
// parameter -> is a variable that is used in a function to receive a value when the function is called. storagte for a specific function
function sayHello(name) {
    console.log("Hello from function with parameter, " + name + "!");
}

// sayHello(); // is to be passed for the function parameter
sayHello("Jason T. Gonzales"); // function calling with argument

// function with multiple parameters
function completeName(firstName, middleName, lastName) {
    console.log(`hello, ${firstName} ${middleName} ${lastName}!`);
}

completeName("Jason", "T.", "Gonzales"); // function calling with multiple arguments
completeName("Jason", "T.", "Gonzales", "Jr."); // hindi gagana kasi 4 yung parameter pero 3 lang yung argument, extra argument is ignored
completeName("Jason", "T."); // hindi gagana kasi kulang yung argument, dapat 3 yung argument para gumana

// function and return statement
// return will hold a value to be used outside the function, it will return a value to the caller of the function
function print(){
    console.log("This is a function with return statement");
    return "This is the return value of the function";
}

print(); // function calling, it will print the console log but the return value is not being used

let sum = function(num1, num2) {
    let total = num1 + num2;
   console.log("Total" + total);
   return total;
}

let result = sum(40, 45); // function calling with arguments, the return value of the function is stored in the variable result
console.log(result); // using the return value of the function
checkRemarks(result); // function calling with the return value as an argument

if (result >= 30) {
    console.log("Passed");
} else {
    console.log("Failed");
}

function checkRemarks(score) {
    if (score >= 75) {
        console.log("Passed");
    } else {
        console.log("Failed");
    }
}


let registration = function(name, age) {
    if (age >= 17) {
        console.log("you cant register because you are underage");
    } else {
        console.log(`${name}, you can register`);
        return age;
    }
}

let value = registration("Jason T. Gonzales", 16);
console.log("Age: " + value);
function checkAge(age) {

    if (age >= 17) {
        console.log("you cant register because you are underage");
    } else {
        console.log("you can register");
    }
}

checkAge(value);