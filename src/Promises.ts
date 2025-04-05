// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = "Something happened dood"
//     if (data) {
//       resolve(data)
//     } else {
//       reject("Error happened")
//     }
//   }, 2000)
// })

// newPromise
//   .then((mesage) => {
//     console.log(mesage)
//   }
//   ).catch((err) => {
//     console.log(err)
//   });


// Exercise from ChatGPT


// const example1 = new Promise<number>((resolve, reject) => {
//   setTimeout(() => {
//     const number = Math.random() > 0.5 ? 5 : 0;
//     if (number) {
//       resolve(number);
//     }
//     else {
//       reject("Error occured by getting data")
//     }
//   }, 300)
// })
// example1
//   .then((num: number) => {
//     const data = num * 2
//     return data
//   })
//   .then((data: number) => {
//     console.log(data - 2)
//   })
//   .catch((err) => {
//     console.log(err)
//   })



//   Task: Write a function fetchData that simulates an API call using Promise. It should:

// Resolve with data ({ id: 1, name: "John" }) if the input is valid (e.g., id is greater than 0).
// Reject with an error message ("Invalid ID") otherwise.


// function fetchData(getInput: number) {
//   return new Promise<{ id: number, name: string }>((resolve, reject) => {
//     setTimeout(() => {
//       const obj = { id: 1, name: 'john' }
//       if (getInput > 0) {
//         resolve(obj)
//       } else {
//         reject(`Invalid ID: ${getInput}`);
//       }
//     }, 50)
//   })
// }

// function getInputValue() {
//   return new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//       const id: number = Math.random() > 0.5 ? 1 : 0;
//       id > 0 ? resolve(id) : reject("Invalid ID generated")
//     }, 0)
//   })
// }

// const execute = async () => {
//   try {
//     const getInput = await getInputValue();
//     const getData = await fetchData(getInput);
//     console.log('get a input number', getInput)
//     console.log('get a output data', getData)
//   }
//   catch (err) {
//     console.log(err)
//   }
// }

// execute()



// function getUserData() {
//   return new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//       const userName: string = 'Karthick'
//       if (userName) {
//         resolve(userName)
//       } else {
//         reject(new Error('No data found'))
//       }
//     }, 1 * 1000)
//   })
// }

// const getUserAge = async () => {
//   try {
//     const user = [{ name: 'Karthick', age: 24 }]
//     const verifyUser: string = await getUserData();

//     (user[0] && user[0].name === verifyUser) ? console.log(user[0].age) : console.log('Error');
//   }
//   catch (err) {
//     console.log(err);
//   }
// }
// getUserAge()

// import fetch from 'node-fetch';

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const getData = fetch('https://reqres.in/api/users?page=2');
      const getData = 'HI';
      if (getData) {
        resolve(getData)
      }
      else {
        reject(new Error)
      }
    }, 100)
  })
}

function getUserDetails() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userDetails = [{ name: 'Karthick', age: 24 }];
      if (userDetails) {
        resolve(userDetails)
      }
      else {
        reject(new Error)
      }
    }, 1000)
  })
}


// Promise.race([getUserData(), getUserDetails()])
//   .then((data) => {
//     console.log(data)
//   })
// .then((data) => {
//   if (data[0]) {
//     console.log((data[1] as PromiseFulfilledResult<unknown>).value);
//   }
// })
// .catch((err) => {
//   console.log(err)
// });

// getUserData()
//   .then((data) => {
//     const userData = JSON.stringify(data)
//     return userData
//   })
//   .then((userData) => {
//     console.log(userData)
//   })
//   .catch((err) => console.log(err))




const number: Array<number | string | object> = [5, 1, 2, 2, 'hi', { name: 'Karthick' }];
console.log(number)


