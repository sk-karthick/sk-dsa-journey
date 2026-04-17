// // Learning Promises


// //  1. Promises is a object
// //  2. It works asynchornous



// const getData = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         let data = null;
//         if (data) {
//             resolve('Data is here');
//         } else {
//             reject('No Data Found')
//         }
//     }, 2000)
// })
// getData
//     .then((anns) => { console.log(anns) })
//     .catch((error) => console.log(error))
//     .finally(()=> console.log('Code works well'))


// console.log('Hi')
// import fetch from 'node-fetch';

// const getDataSchema = async () => {
//     try {
//         const response = await fetch('https://sxzhq34r-3000.inc1.devtunnels.ms/api/users');
//         if (!response.ok) throw new Error(`API responded with status: ${response.status}`);
//         const data = await response.json();
//         console.log('data', data);
//     } catch (error) {
//         console.log('Error', error.message);
//     }
// };
// getDataSchema();


console.log(0.1 + 0.2 === 0.3);

console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);
