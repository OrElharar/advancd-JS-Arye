// let firstName, lastName, fullSentence;
// firstName = "Or";
// lastName = "Elharar";
// fullSentence = `My first name is:${firstName}, and my last name is:${lastName}`;
// console.log(fullSentence);

// let myVar1, myVar2, myVar3;
// myVar1 = null;
// myVar2 = undefined;
// if(myVar1 ==)
// {
//     myVar3 = "false";
// }
// else
//     myVar3 = "not false";
    
//     console.log(myVar3);
// let myVar,myString;
// myVar = 100;
// switch(myVar)
// {
//     case 1:
//         myString = "Sunday";
//         break;
//         case 2:
//             myString = "Monday";
//             break;
//         case 2:
//         myString = "Tuesday";
//         break;
//         case 4:
//         myString = "Wednsday";
//         break; 
//         case 5:
//         myString = "Thursday";
//         break;  
//         case 6:
//         myString = "Friday";
//         break;  
//         case 7:
//         myString = "Saturday";
//         break;  
//         default:
//         myString = "Not a day";
//         break;  
          
// }
// console.log(myString);
// let myString = "";
// for (let i=1; i<=9; i++)
// {
//     for (let j=1; j<=10; j++) 
//     {
//         if(i*j ===40 || i*j === 90)
//             myString+= "    "
    
//       else
//             myString+=(i*j<10) ? "   "+i*j:"  "+ i*j;
       
        
//     }
//     console.log(myString);
//     myString = "";
// }

// function multiplyThreeNumbers(num1 = 0, num2 =0, num3=0)
// {
//     return num1*num2*num3;
// }
// console.log(multiplyThreeNumbers(1,3));
// function add(num1,num2)
// {
//     console.log(num1+num2);
// }
// function doSomethingWithTwoNumbers(callBack, num1,num2)
// {
//      callBack(num1,num2);
// }
// doSomethingWithTwoNumbers(add, 1,2);
// let car = {
//     model: "Mazda 2",
//     power: 2000,
// }
// console.log(car);
// delete car['power'];
// console.log(car);

// function addFieldAndValue(obj, field, value)
// {
//     obj[field] = value;
//     return obj;
// }

// console.log(addFieldAndValue(car,"price",100000));

// const PersonMaker = function (name, personId)
// {
//     this.name = name;
//     let id ="";

//     this.setId =  function(personId)
//     {
//         if(personId.length > 5)
//             return;
//         this.id = personId;
//     }
//     id =  this.setId(personId);
//     PersonMaker.totalPersons+=1;
//      this.getId = function ()
//     {
//          return this.id;
//     }
//     this.print = function()
//     {

//     }
// }
// PersonMaker.totalPersons = 0;
// PersonMaker.getTotalPersons = function()
// {
//     return this.totalPersons;
// }
// let or = new PersonMaker("Or Elharar", "0923");
// let dror = new PersonMaker("Dror Bloom", "4923");
// console.log(PersonMaker.getTotalPersons());
// let myArr = [[1,2,3,4,5],[6,7,8,9,10]];
// console.log(myArr[1][1]);

// let myArray = [
//     {name: 'Or'},
//     {name: 'Dror'},
//     {name: 'Omri'},
//     {name: 'Ofri'}
// ]
//  delete myArray[1];
// arrayFunc = (element, i) => {
//     element.IndexPlusName = element.name + i;
// }
// myArray.forEach(arrayFunc);

// console.log(myArray);

let midicalStudentsList = [
    {name: 'Or', id:'31246', age: 36},
    {name: 'Dror', id:'34564', age: 34},
    {name: 'Omri', id: '324324', age: 32},
    {name: 'Ofri', id: '21312', age: 40}
]
allStudentsBelow35 = function(listOfStudents)
{
    let listOfAllStudentYoungerThan35 = [];
    for (let element of listOfStudents)
    {
        if (element.age<35)
            listOfAllStudentYoungerThan35.push(element);
    }
    return listOfAllStudentYoungerThan35;
}
let allYoungStudents = allStudentsBelow35(midicalStudentsList);
console.log(allYoungStudents);
