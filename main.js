'use strict'
// wordOccurence takes a string that then is split and letters are counted and returns the amount of times any letter shows up in that string

//loop through characters in a string
//count each
//.split? to array
// record how many times a letter occurs
// for each char in string pop into a new array

let string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."
//if character was seen before record 
let stringObj = {}
let count = 0
let wordOccurence = (string) => {
    let splitString = string.toLowerCase().split('');
    //return splitString
    splitString.forEach(element => {
        
        stringObj = splitString;
         //if(element in stringObj){
             
        //      // If the element is in the object add one to the value for the element key
        //     console.log("test")
        // } else {
        //     //stringObj = stringObj.element
        //     // if the element is not in the object then add element as key in the object and set value to 1
        // }
    });
}

console.log(wordOccurence(string))
console.log(stringObj)