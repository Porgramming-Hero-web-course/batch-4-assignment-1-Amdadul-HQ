// Problem 3:
// Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

// // Sample Input:
// countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");

// // Sample Output:
// 2;

function countWordOccurrences(sentence:string,word:string):number{
    const words : string[] = sentence.toLowerCase().split(/\W+/);
    return words.filter(str => str === word.toLowerCase()).length;
}

