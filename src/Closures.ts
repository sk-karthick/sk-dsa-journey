// Closures in JS


// function outerFunction(outerPara:number){
//     return function innerFunction(innerPara:number){
//         return outerPara + innerPara;
//     }
// }

// console.log(outerFunction(10)(20));
// 30



function counter() {
    let counter: number = 0;
    return {
        increment: function () {
            counter++
            return counter;
        },
        decrement: function () {
            counter--;
            return counter;
        },
        getCounter: function () {
            return counter;
        }
    }
}

// const count = counter();
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.decrement());


const e = 10;
function sum(a: number) {
    return function (b: number) {
        return function (c: number) {
            return function (d: number) {
                return a + b + c + d + e;
            };
        };
    };
}

// const sumNumber1 = sum(1);
// const sumNumber2 = sum(1);
// console.log(sumNumber1(2)(3)(4)); // 20

// console.log(sum(1)(2)(3)(4)); // 20



function outer() {
    let a = 10;
    return function inner() {
        a++;
        console.log(a);
    }
}
// const fun1 = outer();
// const fun2 = outer();

// fun1();
// fun1();
// fun2();


// Use closures to create a once-only function (a function that can be called only once).



const once = () => {
    let called = false;

    return function () {
        if (!called) {
            called = true;
            console.log("Function called");
        } else {
            console.log("Function can only be called once");
        }
    }
}

// const onlyFun = once();
// onlyFun();
// onlyFun();
// onlyFun();
// onlyFun();



// Create a counter with reset method using closures.



function resetCounter(number: number) {
    let counter = number;

    return {
        increment: function () {
            counter++;
            return counter;
        },
        decrement: function () {
            counter--;
            return counter;
        },
        reset: function () {
            counter = number;
            return counter;
        }
    }
}


// const counter1 = resetCounter(10);

// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.decrement());
// console.log(counter1.reset());


function myTimer() {
    let currentTime = 0;
    let timerId: any;
    return {
        start: function () {
            if (!timerId) {
                timerId = setInterval(() => {
                    currentTime++;
                    console.log(currentTime);
                }, 1000)
            }
        },
        stop: function () {
            clearInterval(timerId);
            timerId = null;
        },
        reset: function () {
            this.stop();
            currentTime = 0;
            console.log(currentTime);
        }
    }
}

// const timer = myTimer();
// timer.start();

// setTimeout(() => {
//     timer.stop();
//     setTimeout(() => {
//         timer.reset();
//     }, 2000)
// }, 7000)
// timer.start();



const countDown = (count: number) => {
    let countDownValue = count;
    let timerId: number | NodeJS.Timeout;;
    return {
        start: function () {
            timerId = setInterval(() => {
                countDownValue--;
                console.log(countDownValue)
                if (countDownValue <= 0) {
                    console.log("Countdown complete!");
                    this.pause();
                }
            }, 1000)
        },
        pause: function () {
            clearInterval(timerId);
            timerId = null as any;
        },
        reset: function () {
            this.pause();
            countDownValue = count;
            console.log(`Reset to: ${countDownValue}`);
        }
    }
}

// const getCountDown = countDown(15);
// getCountDown.start();


// setTimeout(() => {
//     getCountDown.pause()
// }, 4000);

// setTimeout(() => {
//     getCountDown.start()
// }, 5000)

// setTimeout(() => {
//     getCountDown.reset();
//     getCountDown.start();
// }, 9000)



function stopWatch() {
    let startTime = 0
    let timerId: any;
    return {
        start: function () {
            timerId = setInterval(() => {
                startTime++;
                console.log('tik tik tik', startTime)
            }, 1000)
        },
        stop: function () {
            clearInterval(timerId);
            timerId = null;
        },
        reset: function () {
            this.stop()
            startTime = 0;
            console.log('Your stop watch is reset to : ', startTime);
        },
        getTime: function () {
            console.log('Your achievement', startTime)
        }
    }
}

// const getStopWatch = stopWatch();


// getStopWatch.start();

// setTimeout(() => {
//     getStopWatch.stop();
// }, 4000)

// setTimeout(() => {
//     getStopWatch.getTime();
// }, 4000)

// setTimeout(() => {
//     getStopWatch.reset()
// }, 5000)

// setTimeout(() => {
//     getStopWatch.start()
// }, 5000)



// const taskSchedular = () => {
//     // let timeOut:number = 0;

//     return{
//         addTask: function(fun:any,timeOut:number){
//             setTimeout(() => {
//                 return fun
//             },timeOut)
//         },
//         removeTask: function(){
//             console.log('Task removed')
//         }
//     }
// }

// const schedular = taskSchedular();

// schedular.addTask(() => console.log('Task 1 executed'), 1000);
// schedular.removeTask();


const map = new Map();
map.set('name', 'Karthick');
map.set('age', 24);
map.set('location', 'Coimbatore');

console.log(map);

