// Given an array of integers, find the sum of its elements.

// For example, if the array ar = [1, 2, 3] 1 + 2 + 3 = 6, so return 6.

// Function Description

// Complete the simpleArraySum function in the editor below. 
// It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):
// ar: an array of integers

// Input Format
// The first line contains an integer, n, denoting the size of the array.
// The second line contains n space-separated integers representing the array's elements.

// Pseudocode
// Define a function simpleArraySum that takes one parameter that is an array (ar)
// Declare a variable that is set to 0 to be our placeholder
// Iterate through the array and add all numbers to declared variable
// Return the variable

function simpleArraySum(ar) {
    let sumOfArray = 0;
    for (let i = 0; i < ar.length; i++) {
        sumOfArray += ar[i];
    }
    return sumOfArray;
}