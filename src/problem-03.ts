function countWordOccurrences(sentence:string,word:string):number{
    const words : string[] = sentence.toLowerCase().split(/\W+/);
    return words.filter(str => str === word.toLowerCase()).length;
}

