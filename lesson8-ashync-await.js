//node lesson8-ashync-await.js
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
const resolveFunc = (resObj) => {
    console.log("Data recieved, status: ", resObj);
}
const rejectFunc = (rejObj) => {
    console.log("Application failed, cause: ", rejObj);
}
aschyncDevideAndConvertFunc(2, 8)
    .then(resolveConvert)
    .then(resolveFunc)
    .catch(rejectFunc)
const getPrectageOfDividend = async (num1, num2) => {
    try {
        const result = await aschyncDevideAndConvertFunc(num1, num2);
        const precentage = await aschyncPromisePrecentageConverter(result);
        return precentage;
    }
    catch (err) {
        throw err;
    }
}
getPrectageOfDividend(10, -5)
    .then((res) => {
        console.log("Good job!", res);
    }).catch((error) => {
        console.log("Oh no!", error)
    })
