const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const intArray = []

rl.question("Enter integers seperated by space:\n", (input) => {
    let isInvalidInput = false
    input.split(' ').forEach((value, index, array) => {
        // Insted of inserting values in array we can simply add them here too.
        if(isVlidInteger(value) === true)
            intArray.push(parseInt(value))
        else {
            console.log("Invalid Input! only integral values allowed!")
            isInvalidInput = true
            return
        }
    })
    // Adding values stored in array and prinitg to console
    if(!isInvalidInput)
        console.log("Addition of elements:", add(intArray))
    rl.close()
})

// Check if value is valid integer or not
const isVlidInteger = (value) => {
    for(let i = 0; i < value.length; i++) {
        let ascii = value.charCodeAt(i)
        if(ascii < 48 || ascii > 57)
            return false
    }
    return true
}

// return the sum of value of given array
const add = (arr) => {
    let addition = 0;
    arr.forEach((value) => {
        addition += value
    })
    return addition
}
