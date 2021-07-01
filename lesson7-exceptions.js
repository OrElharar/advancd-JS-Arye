//node lesson7-exceptions.js
const throwError1 = () => {
    const error1 = new Error("Failed");
    //Adding .name to error1
    error1.name = "Error#1";
    //Adding .date to error1
    error1.date = new Date();
    throw error1;
}
class CostumError extends Error {
    constructor(message) {
        super(message),
            this.name = "costumError",
            this.date = new Date();
    }
}
const throwError3 = () => {
    throw new CostumError("Error 3");
}
try {
    throwError3();
} catch (err) {
    console.log(err.name);
} finally {
    console.log("Finally!");
}