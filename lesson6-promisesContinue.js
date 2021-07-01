const p1 = new Promise((resolove, reject) => {
    setTimeout(() => {
        const p1Num = Math.floor(Math.random() * 2);
        if (p1Num === 1)
            resolove(`P1 - ${p1Num}`);
        else
            reject(`P1 - ${p1Num}`);
    }, 1000)
})
const p2 = new Promise((resolove, reject) => {
    setTimeout(() => {
        const p2Num = Math.floor(Math.random() * 2);
        if (p2Num === 1)
            resolove(`P2 - ${p2Num}`);
        else
            reject(`P2 - ${p2Num}`);
    }, 500)
})
const p3 = new Promise((resolove, reject) => {
    setTimeout(() => {
        const p3Num = Math.floor(Math.random() * 2);
        if (p3Num === 1)
            resolove(`P3 - ${p3Num}`);
        else
            reject(`P3 - ${p3Num}`);
    }, 1500)
})
// Promise.race([p1, p2, p3])
//     .then((res) => {
//         console.log('Resolved - ' + res);
//     }).catch((rej) => {
//         console.log('Rejected - ' + rej);
// })
const myPromiseRace = (promisesArr = []) => {
    if (promisesArr == null || promisesArr.length === 0) return;
    return new Promise((res, rej) => {
        for (let pElement of promisesArr) {
            pElement
                .then((raceResolve) => {
                    return res(raceResolve);
                })
                .catch((raceReject) => {
                    return rej(raceReject);
                })
        }
    })
}
// myPromiseRace([p1, p2, p3])
//     .then((finalRes) => {
//         console.log("Race Resolved!", finalRes);
//     }).catch((finalRej) => {
//         console.log("Race Error! - ", finalRej);
//     })
const p4 = new Promise((resolove, reject) => {
    if (2 === 2)
        return resolove("P4 Success");
    else
        return reject("P4 failed");
})
const p5 = new Promise((resolove, reject) => {
    return resolove("P5 Succeed!");
})
const p6 = new Promise((resolove, reject) => {
    return resolove("P6 Success");
})


const myPromiseAllContainer = (arrP) => {
    return new Promise((totalRes, totalRej) => {
        const arrResult = [];
        let resultsCount = 0;
        for (let i = 0; i < arrP.length; i++) {
            arrP[i].then((allRes) => {
                arrResult[i] = allRes;
                resultsCount++;
                if (resultsCount === arrP.length)
                    return totalRes(arrResult);
            }).catch((oneRej) => {
                return totalRej(oneRej);
            })
        }
    })

}
// myPromiseAllContainer([p1, p2, p3])
//     .then((resMessage) => {
//         console.log("All succeed! ", resMessage);
//     }).catch((rejMessage) => {
//         console.log("Oh! " + rejMessage + " failed!")
//     })
// .then((resolvePromosieAll => {
//     console.log(resolvePromosieAll);
// }))
// .catch((rejectPromiseAll => {
//     console.log(rejectPromiseAll);
// }))
const myPromiseAllSetteld = (arrP) => {
    return new Promise((setteledRes, setteledRej) => {
        const arrResult = [];
        let resultsCount = 0;
        const resolveResults = () => {
            resultsCount++;
            if (resultsCount === arrP.length)
                return setteledRes(arrResult);
        }
        for (let i = 0; i < arrP.length; i++) {
            arrP[i].then((thisRes) => {
                let result = {};
                result.status = "fullfilled";
                result.value = thisRes;
                arrResult[i] = result;
                resolveResults();
            }).catch((thisRej) => {
                let error = {};
                error.status = "rejected";
                error.value = thisRej;
                arrResult[i] = error;
                resolveResults();
            })
        }
    })

}
// myPromiseAllSetteld([p1, p2, p3, p4, p5, p6])
//     .then((resMessage) => {
//         console.log(resMessage);
//     })

const myPromiseAny = (arrP) => {
    return new Promise((totalRes, totalRej) => {
        const arrErrors = [];
        let errorsCounts = 0;
        for (let i = 0; i < arrP.length; i++) {
            arrP[i].then((oneRes) => {
                return totalRes(oneRes);
            }).catch((currentErr) => {
                arrErrors[i] = currentErr;
                errorsCounts++;
                if (errorsCounts === arrP.length)
                    return totalRej(arrErrors);
            })
        }
    })

}
myPromiseAny([p1, p2, p3])
    .then((resMessage) => {
        console.log("first succeed - ", resMessage);
    }).catch((rejMessage) => {
        console.log("Oh! " + rejMessage + " failed!")
    })
