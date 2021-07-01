// const devide = (num1, num2) => {
//     if (num2 === 0)
//         return null;
//     return num1 / num2;
// }
// const convertToPrecentage = (num) => {
//     return (num < 0) ? printByResult(`Error! precentage can't be lower than 0`, null) : printByResult(null, (num * 100) + "%")

// }
// const aSchyncFunc1 = (num1, num2, callBack1, callBack2) => {
//     setTimeout(() => {
//         const devidedNum = callBack1(num1, num2);
//         if (devidedNum == null) {
//             return (printByResult(`Error! Can not devide ${num1} in 0`, null));
//         }
//         else
//             return callBack2(devidedNum);
//     }, 3000)

// }
// const printByResult = (error, result) => {
//     console.log((error != null) ? error : result);

// }
// // aSchyncFunc1(5, 10, devide, convertToPrecentage);
// const aschyncPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNum = Math.floor(Math.random() * 2);
//         // console.log(randomNum);
//         if (randomNum === 0) {
//             const resultObj = {};
//             resultObj.error = "ERROR!!!"
//             reject(resultObj);
//         }
//         else {
//             const resultObj = {};
//             resultObj.success = "SUCCESS!!!";
//             resolve(resultObj);
//         }

//     }, 2000)

// })
// const resolveFunc = (resObj) => {
//     console.log("Data recieved, status: ", resObj);
// }
// const rejectFunc = (rejObj) => {
//     console.log("Application failed, cause: ", rejObj);
// }
// // aschyncPromise1.then(resolveFunc, rejectFunc);
// // aschyncPromise1
// //     .then(resolveFunc)
// //     .catch(rejectFunc)

// const aschyncDevideFunc = (num1, num2) => {
//     return aschyncPromiseDevide = new Promise((resolveDevide, rejectDevide) => {

//         setTimeout(() => {
//             if (num2 !== 0) {
//                 resolveDevide({ result: `${num1 / num2}` });

//             }
//             else {
//                 rejectDevide({ error: "Devider can not be equal to 0!" });
//             }
//         }, 5000)

//     })

// }
// aschyncDevideFunc(20, 4)
//     .then(resolveFunc)
//     .catch(rejectFunc)
const resolveFunc = (resObj) => {
    console.log("Data recieved, status: ", resObj);
}
const rejectFunc = (rejObj) => {
    console.log("Application failed, cause: ", rejObj);
}

const aschyncPromisePrecentageConverter = (resultObj) => {
    return aschyncPrecentageConverterFunc = new Promise((resolvePrecentage, rejectPrecentage) => {
        setTimeout(() => {
            const currentNum = resultObj.result;
            if (currentNum >= 0) {
                const precentages = currentNum * 100;
                resolvePrecentage({ success: `The result is - ${precentages}%` });
            }
            else
                rejectPrecentage({ error: "Can not calculate negetive precentages!" });
        }, 1500)
    })
}


const aschyncDevideAndConvertFunc = (num1, num2) => {
    return aschyncPromiseDevide = new Promise((resolveDevide, rejectDevide) => {

        setTimeout(() => {
            if (num2 !== 0) {
                resolveDevide({ result: `${num1 / num2}` });

            }
            else {
                rejectDevide({ error: "Devider can not be equal to 0!" });
            }
        }, 1000)

    })

}
const resolveConvert = (resultObj) => {
    return aschyncPromisePrecentageConverter(resultObj);
    // .then(resolveFunc)
    // .catch(rejectFunc)

}

aschyncDevideAndConvertFunc(2, 8)
    .then(resolveConvert)
    .then(resolveFunc)
    .catch(rejectFunc)
