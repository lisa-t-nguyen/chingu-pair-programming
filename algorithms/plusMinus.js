// Given an array of integers, calculate the ratios of its elements that are positive, negative, 
// and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
// though answers with absolute error of up to 10^-4 are acceptable.

// Function Description
// Complete the plusMinus function in the editor below.
// plusMinus has the following parameter(s):
// int arr[n]: an array of integers
// Print
// Print the ratios of positive, negative and zero values in the array. Each value should 
// be printed on a separate line with digits after the decimal. The function should not return a value.
// Input Format
// The first line contains an integer, n , the size of the array.
// The second line contains n space-separated integers that describe arr[n]

function plusMinus(arr) {
    const n = arr.length;
    let negative = 0;
    let positive = 0;
    let zero = 0;

    for (let i = 0; i < n; i++) {
        const num = arr[i];
        if (Math.sign(num) === 1) {
            positive++
        } else if (Math.sign(num) === -1) {
            negative++
        } else {
            zero++
        }
    }

    const positiveRatio = positive / n;
    const negativeRatio = negative / n;
    const zeroRatio = zero / n;

    return positiveRatio.toFixed(6), negativeRatio.toFixed(6), zeroRatio.toFixed(6);
}