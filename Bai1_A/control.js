let n= parseInt(prompt("enter n"));
let a= parseInt(prompt("Enter input number"));
function findOppositeNumber(n, inputNumber)
{
    let m= n/2;
    if(inputNumber >= m)
    {
        return inputNumber-m;
    }
    else
    {
        return inputNumber + m;
    }
}
console.log(`C1 ${findOppositeNumber(n, a)}`);
//console.log(`C2 ${findOppositeNumber2(n, a)}`);