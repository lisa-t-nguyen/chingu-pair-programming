// Given five positive integers, find the minimum and maximum values that can be 
// calculated by summing exactly four of the five integers. Then print the respective minimum and 
// maximum values as a single line of two space-separated long integers.

// EXAMPLE
// arr = [1, 3, 5, 7, 9]
// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. 
// The function prints 16 24

// PSEUDOCODE
// Define a function miniMaxSum that takes one parameter that is an array of numbers
// Find the largest number
// Find the smallest number
// Pop off the largest number in the array and sum up all numbers
// Pop off the smallest number in the array and sum up all numbers 
// Return both sums

function miniMaxSum(arr) {
    const largestNumber = Math.max(arr);
    const smallestNumber = Math.min(arr);

    for (let i = 0; i < arr.length; i++) {
        
    }
}