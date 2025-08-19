let promise1 = new Promise((resolve , reject) => {
    let success = true;

    if(success) {
        resolve("Promise fulfiled");
    }
    else {
        reject("Promise Rejected");
    }
});

promise1.then((message) => {
    console.log("Then ka message is " + message);
    
}).catch((error) => {
    console.log("Error: " + error);
    
})