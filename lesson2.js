let arrSort = [1,2,3,10,12,7];
// console.log(arrSort.sort());
const stringSort = (element2, element1)=>{
    return element1.localeCompare(element2)
}
let arrStringSort = ['A','b','z','D','c'];
// console.log(arrStringSort.sort(stringSort));

let ReudiceSoryArr = [1,2,3,4,5,6];
const myReducer = (arr,callback, initialValue)=>{
initialValue = initialValue == null ? 0 : initialValue;
    for(let i=0; i<arr.length -1; i++)
    {
        initialValue += callback(arr[i], arr[i+1]);
    }
    return initialValue;
}
const sumReducer = (acc,corrent)=>{
    console.log(acc);
    return acc+corrent;
}
const sumTwoElements = (el1,el2)=>{
    return el1+el2;
}
// console.log(myReducer(ReudiceSoryArr,sumTwoElements));

let arr3 = [
    ['a',1],
    ['b',2],
    ['c',3],
    ['d',4]
]
// const creatNewObj = (accObj,currentValue)=>{
//     accObj[currentValue[0]] = currentValue[1];
//     return accObj;
// }
const creatNewObj = (accObj,[key,value])=>{
    accObj[key] = value;
    return accObj;
}
// console.log(arr3.reduce(creatNewObj,{}));

const isStringInside = (stringToCheckIn, stringToCheck, startIndex=0)=>{
    let result = true;
    let j=0;
    // let foundFirstLetter = false;
    // let firstIndexLetter;

    for(let i = startIndex;j<stringToCheck.length && i<stringToCheckIn.length && result; i++, j++ )
    {
        console.log(stringToCheckIn[i] , stringToCheck[j],"j="+j);
        if(stringToCheckIn[i] !== stringToCheck[j])
        {
            j=-1;
        }
        else
        {
            if(j === stringToCheck.length-1)
                return true;
        }
    }
    return false;
    // for(; startIndex<stringToCheckIn.length-1 && !foundFirstLetter; startIndex++)
    // {
    //     if(stringToCheckIn[startIndex] === stringToCheck[0])
    //         foundFirstLetter = true;
    // }
    // startIndex--
    // console.log(startIndex);
    // for (let i = startIndex; j<stringToCheck.length-1 && i<stringToCheckIn.length-1 && result; i++, j++)
    // {
    //     result = (stringToCheckIn[i]===stringToCheck[j]) ? true : false;
    //     console.log(stringToCheckIn[i]);
    // }
    // return result;
}

const myInexOf = (stringToCheckIn, stringToCheck, startIndex = 0) =>{
    let j=0;
    let resultIndex = 0;
    for(let i = startIndex;j<stringToCheck.length && i<stringToCheckIn.length; i++, j++ )
    {
       
        if(stringToCheckIn[i] !== stringToCheck[j])
        {
            j=-1;
            resultIndex++;
        }
        else
        {
            if(j === stringToCheck.length-1)
            {
                return resultIndex;
            }
        }
    }
    return -1;
}
const myLastIndexOf = (stringToCheckIn, stringToCheck, startIndex = 0) =>{
    let j=0;
    let resultIndex = 0;
    let foundString = false;
    for(let i = startIndex;j<stringToCheck.length && i<stringToCheckIn.length; i++, j++ )
    {
       
        if(stringToCheckIn[i] !== stringToCheck[j])
        {
            j=-1;
        }
        else
        {
            if(j === stringToCheck.length-1)
            {
                foundString = true;
                resultIndex = i;
                j=-1;
            }
        }
    }
    return resultIndex = (foundString)? resultIndex:-1;
}
// console.log(myLastIndexOf('Hello World - it is a beatifull day. What are you planning to do today?', 'day'));
const mySlice = (str, startIndex=0, endIndex=str.length)=>{
    if(startIndex>endIndex)
    {
        let tempIndex = startIndex;
        startIndex = endIndex;
        endIndex =tempIndex;
    }
    let resultString="";
    for(let i=startIndex; i<endIndex; i++)
        resultString+=str[i];
    return resultString;
}
// console.log(mySlice('Hello World', 6,7));
const myStringIncludeCounter = (stringToCheckIn, stringToCheck, startIndex = 0) =>{
    let j=0;
    let resultCounter = 0;
    let foundString = false;
    let nextIndex=startIndex;
    while(nextIndex<stringToCheckIn.length)
    {
        if(stringToCheckIn[nextIndex]===stringToCheck[j])
            {
                let i =nextIndex;
                while(j<stringToCheck.length && i < stringToCheckIn.length)
                {
                
                    if(stringToCheckIn[i] === stringToCheck[j])
                    {
                        if(j === stringToCheck.length-1)
                        {
                            foundString = true;
                            resultCounter++;
                           
                        }
                    }
                    i++;
                    j++;
                    
                }
            }
            nextIndex++;
            j=0;
    }
    // for(let nextIndex = startIndex; nextIndex<stringToCheckIn.length; nextIndex++)
    // {
    //     // console.log(nextIndex)
    //     if(stringToCheckIn[nextIndex]===stringToCheck[j])
    //     {
            
    //         for(let i = nextIndex;j<stringToCheck.length && i<stringToCheckIn.length; i++, j++ )
    //         {
            
    //             if(stringToCheckIn[i] === stringToCheck[j])
    //             {
    //                 if(j === stringToCheck.length-1)
    //                 {
    //                     foundString = true;
    //                     resultCounter++;
    //                     j=-1;
    //                 }
    //             }
                
    //         }
    //     }
    // }
    return resultCounter = (foundString)?resultCounter:-1;
}
// const myStringIncludeCounterRecursive = (stringToCheckIn, stringToCheck, nextIndex = 0,j=0,resultCounter =0, foundString = false) =>{
// if(nextIndex === stringToCheckIn.length)
//     return  (j===stringToCheck.length-1)? 1:0;
// if(stringToCheckIn[nextIndex] === stringToCheck[j])
//     return (j===stringToCheck.length-1)?1+ myStringIncludeCounterRecursive():
// if(stringToCheckIn[nextIndex]===stringToCheck[j])
// {

// }
   
//         if(stringToCheckIn[nextIndex]===stringToCheck[j])
//             {
//                 let i =nextIndex;
//                 while(j<stringToCheck.length && i < stringToCheckIn.length)
//                 {
                
//                     if(stringToCheckIn[i] === stringToCheck[j])
//                     {
//                         if(j === stringToCheck.length-1)
//                         {
//                             foundString = true;
//                             resultCounter++;
                           
//                         }
//                     }
//                     i++;
//                     j++;
                    
//                 }
//             }
          
//     }
// console.log(myStringIncludeCounterRecursive('Hello World Hello', 'o'));
const myReplace = (string, subString, stringToswitch)=>{
    if(!(string.includes(subString)))
        return string;
    let endIndex = string.indexOf(subString);

    let resultString = string.slice(0,endIndex)+stringToswitch+string.slice(endIndex+subString.length,string.length);
    return resultString;

}
const myReplaceAll = (string, subString, stringToswitch)=>{
    let resultString = (string.includes(subString))?"":string;
    let tempString = string;
    while(tempString.includes(subString))
    {

        let endIndex = tempString.indexOf(subString);

        resultString = tempString.slice(0,endIndex)+stringToswitch+tempString.slice(endIndex+subString.length,tempString.length);
        tempString = resultString;
    }
        return resultString;

}

const myReplaceAllRecursive = (string, subString, stringToswitch)=>{
    return (string.includes(subString)) ? myReplaceAllRecursive(myReplace(string, subString, stringToswitch),subString,stringToswitch) : string;
}
// console.log(myReplaceAllRecursive('fox fox fox fox fox fox foxfox the fox is barking','fox','cat'));
// console.log('fox and fox is barking'.replaceAll('cat'));

const mySplit = (string, seperator)=>{
    let resultArray = [];
    if(seperator===null)
    {
        return resultArray.push(string);
    }
    if(seperator === "")
    {
        for(let i=0; i<string.length; i++)
            resultArray.push(resultArray[i]);
        return resultArray;
    }
    if(!(string.includes(seperator)))
        return string;
    while(string.includes(seperator))
    {
       let nextSeperatorStartIndex = string.indexOf(seperator);
        let nextElement = string.slice(0,nextSeperatorStartIndex);
            resultArray.push(nextElement);
        string = string.slice(nextSeperatorStartIndex+seperator.length);
        console.log(string);
    }
    resultArray.push(string);
    return resultArray;
}

const mySplitRecursive = (string, seperator, resultArray=[])=>{
    if(!(string.includes(seperator)))
    {
        if(string.length>0)
            resultArray.push(string);
         return resultArray;
    }
    else
    {
        let nextSeperatorStartIndex = string.indexOf(seperator);
        let nextElement = string.slice(0,nextSeperatorStartIndex);
        if(nextElement.length>0)
            resultArray.push(nextElement);
        string = string.slice(nextSeperatorStartIndex+seperator.length);
        if(string.length>0)
            return mySplitRecursive(string, seperator, resultArray);
        return resultArray;
    }
}
// console.log(mySplitRecursive(' a b c d e     ',' '));

const allPossibleCombinationsRecursive = (string,  resultArray=[])=>{
   
    if(string.length===1 && !isCombinationExist(resultArray,string))
    {
        resultArray.push(string);
        return resultArray;
    }
    let currentStringArray = string.split('');
    let currentNumberOfElementsPossibleCombinations = allPossibleCombinations(currentStringArray,resultArray);
    // resultArray.concat(currentNumberOfElementsPossibleCombinations);
    // string = string.slice(1);
    // return allPossibleCombinationsRecursive(string,resultArray);
    return currentNumberOfElementsPossibleCombinations;
}
const isCombinationExist = (arr,el)=>{
    let result = false;
    if(el==="")
        return true;
    for (let i=0; i<arr.length && !result ;i++)
        result = (arr[i]===el)? true: false;
    return result;
}
const allPossibleCombinations = (stringArray,resultArray,nextElement="")=>{
    if(stringArray.length===0)
    {
        if(!(isCombinationExist(resultArray,nextElement)))
            resultArray.push(nextElement);
    }
    for(let i=0; i<stringArray.length; i++)
    {
        let newStringArray = [...stringArray];
        let nextChar = newStringArray.splice(i,1);
        let newNextElement=nextElement + nextChar;
        allPossibleCombinations(newStringArray, resultArray, newNextElement);
        let newString="";
        newStringArray.forEach(element => {
            newString+=element;            
        });
        allPossibleCombinationsRecursive(newString,resultArray);
    }
    return resultArray

    
}
console.log(allPossibleCombinationsRecursive('abc'))