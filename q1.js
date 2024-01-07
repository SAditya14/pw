//Palindrome Checker Function

// Objective: Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Example: Input: isPalindrome("racecar") Output: true Input: isPalindrome("hello") Output: false

function palindrome (word){
    const word1 = word.toLowerCase();
    return word1 === word.split('').reverse().join('')
}

function displayPalindrome(word) {
    const result = palindrome (word);
   
    if (result){
        console.log(`${word} is Palndrome`);
    } else{
        console.log(`${word} is  not a palindorme`);
    }
    return word;
}

// console.log(displayPalindrome("racecar"));