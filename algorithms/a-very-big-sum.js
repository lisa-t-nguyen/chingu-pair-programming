// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in 
// mind that some of those integers may be quite large.
// Function Description
// Complete the aVeryBigSum function in the editor below. It must return the 
// sum of all array elements.
// aVeryBigSum has the following parameter(s):
// int ar[n]: an array of integers .
// Return
// long: the sum of all array elements
// Input Format
// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.
// Output Format
// Return the integer sum of the elements in the array.

// Pseudocode
// Define a function "aVeryBigSum" that takes one parameter that is an array
// Declare a variable that is equal to 0
// Iterate through the array
// Add all numbers in the array to the declared variable
// Return the variable

function aVeryBigSum(ar) {
    let bigSum = 0;
    for (let i = 0; i < ar.length; i++) {
        bigSum += ar[i];
    }
    return bigSum;
}