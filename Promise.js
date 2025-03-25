// const PromiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function() {
//         console.log('Async task is complete');
//         resolve();

//     }, 1000);
// })

// PromiseOne.then(function() {
//     console.log("Promised consumed");
// })


// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve();
//     }, 1000);
// }).then(function() {
//     console.log("Asyc 2 Completed!");
// })



// const PromiseThree = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         resolve({username: "Gaurav", email: "gaurav@example.com"}, 1000);
//     })
// })


// PromiseThree.then(function(user) {
//     console.log(user);
//     console.log("Async 3 is completed");
// })



// const PromiseFour = new Promise(function(resolve, reject) {

//     setTimeout(function() {
//         let error = true;
//         if(!error) {
//             resolve({username: "Gaurav", password: "123"});
//         }else {
//             reject('Error: Something went wrong');
//         }
//     }, 1000)
// })


// PromiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => {
//     console.log("The promise is either resolved or rejected");
// })

const PromiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "JavaScript", password: "123"});
        }else {
            reject('Error: JS went wrong');
        }
    }, 1000)
});


async function consumePromiseFive() {
    try {
        const response = await PromiseFive

        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const  data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()


//Same this using then, catch 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>  {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch( (error) => {
    console.log(error);
})