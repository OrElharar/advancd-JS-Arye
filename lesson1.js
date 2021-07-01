let myArray = [1,2,3]

const  myForEach = (array, callback)=>
{
    array.forEach(el => {
      callback(el)
        
    });

}
const print =(el)=>
{
    console.log(el);
}

// myForEach(myArray,print);

const mySlice = (arr, firstPoint =0, secondPoint=arr.length) =>
{
    let newArr=[];
    firstPoint = (firstPoint>=0 && firstPoint<=secondPoint)?firstPoint:0;
    secondPoint = (secondPoint <= arr.length)
   for(let i=firstPoint; i<secondPoint; i++)
    newArr.push(arr[i]);
    return newArr;
}

// console.log(mySlice([1,2,3,4], 1,3));
const oppositeArray = (arr) =>
{
    let result = [];
    for (let i=arr.length-1; i>=0; i--)
        result.push(arr[i]);
    return result;
}
const recOppositeArray = (arr, index = 0,arrResult) =>
{
    let currentIndex = arr.length-1-index;
    if (currentIndex === 0)
    {
        arrResult.push(arr[0]);
        return arrResult;
    }
    if(currentIndex === arr.length-1)
    {
        let arrResult =[];
        arrResult.push(arr[currentIndex]);
        return recOppositeArray(arr,index+1,arrResult)
    }
    arrResult.push(arr[currentIndex]);
    return recOppositeArray(arr,index+1,arrResult)
}
 myArray = [1,2,3,4,5,6]
// console.log(recOppositeArray(myArray))

const mySplice = function(arr, startIndex=0, numberOfElementsToDelete = arr.length-1,...newElements)
{
    newElements == null ? [] : [...newElements];
    if(startIndex>arr.length-1 || numberOfElementsToDelete===0)
    {
        arr.concat(newElements);
        return arr;
    }
     if(startIndex + numberOfElementsToDelete> arr.length -1 )
    {
        numberOfElementsToDelete  = arr.length-1-startIndex
        return arr.slice(startIndex,numberOfElementsToDelete).concat(newElements);
    }
    return arr.slice(startIndex,numberOfElementsToDelete).concat(newElements).concat(arr.slice(startIndex+numberOfElementsToDelete, arr.length));

    // newElements.reverse();
    // for (let j=0; j<numberOfElementsToDelete; j++)
    //     arr.pop();
    // for(let a=0; a<startIndex; a++)
    //     newArr.push(arr[a]);
    // for(let i = startIndex; i<newElements.length; i++)
    // {
    //     let nextElement = newElements.pop();
    //     newArr.push(nextElement);
    // }
    // return newArr;
}
let array = [1,2,3,4,5,6]

const allTrueResults = (arr,callback)=>
{
    let newArr=[];
    arr.forEach(element => {
        if(callback(element) === true)
            newArr.push(element);
    });
    return newArr
}
const isZugi = (number) =>
{
    return number%2===0;
}
// 
const isRishoniRec = (number)=>
{
    if(number ===1)
        return false;
    return isRishoniRecursive(number,2)
}
const isRishoniRecursive = (number, devider)=>
{

    if(devider>Math.sqrt(number))
        return true;
    else
   if(number % devider !== 0)
        return  isRishoniRecursive(number, devider+1) 
   return  false;
}
const isRishoni = (number)=>
{
    result = true;
    if(number === 1)
        return true;
    for(let i=2; i<=Math.sqrt(number) && result; i++)
    {
        if(number%i ===0)
            result = false;
    }
    return result;
}
const allNumberUntill100 = []
for(let i=0; i<99; i++)
    allNumberUntill100.push(i+1);
// console.log(allNumberUntill100.filter(isRishoniRec));
const myMap = (arr,callback)=>
{
    let newArr = [];
    let nextElement;
    arr.forEach(element => {
        nextElement = callback(element);
        newArr.push(nextElement);
    });
    return newArr;
}
const multiplyBy10 = (element)=>
{
    return element*10;
}
console.log(myMap([1,2,3,4],multiplyBy10))