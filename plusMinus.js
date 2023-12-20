'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    console.log(arr)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}


function plusMinus(arrLength, arr) {
    // Write your code here
    /*
    Define a Hashtable to store :
    isPositive : number
    isNegative : number
    isZero : number
    
    Iterate through the array, count, positives, negatives, zeroes 
    and store them on the hashtable
    
    Create the proper output to display, ratios
    positive
    negative
    zeros
    and represent a string with 6 places after the decimal
    */
    
    const integerHash = {
        positives : 0,
        negatives: 0,
        zeroes: 0
    }
    
    arr.forEach( (integer, index) => {
        if (integer > 0)
            integerHash.positives += 1
        if (integer < 0)    
            integerHash.negatives += 1
        if (integer === 0)
            integerHash.zeroes += 1
    })
    
    const positiveRatioString = 
    String(integerHash.positives / arrLength).split('.')[0] +
    '.' +
    String(integerHash.positives / arrLength).split('.')[1].substring(0,6)
    
    const negativeRatioString = 
    String(integerHash.negatives / arrLength).split('.')[0] + 
    '.' +
    String(integerHash.negatives / arrLength).split('.')[1].substring(0,6)
    
    const zeroRatioString = 
    String(integerHash.zeroes / arrLength).split('.')[0] +
    '.' +
    String(integerHash.zeroes / arrLength).split('.')[1].substring(0,6)
    
    console.log(positiveRatioString)
    console.log(negativeRatioString)
    console.log(zeroRatioString)
}