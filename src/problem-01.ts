
function sumArray(numbersArr:number[]):number{
    return numbersArr.reduce((accumulator:number, currentValue:number):number=> accumulator + currentValue,0)
}
