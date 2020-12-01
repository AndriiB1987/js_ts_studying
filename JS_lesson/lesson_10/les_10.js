// Реалізувати друкарську машинку. 
// У вас є текст "Hello World".
// Ваша функція має друкувати цей текст по 1 симоволу в браузері. 
// КОЖНА нова буква має бути з РАНДОМНОЮ затримкою від 0.1 до 1 секунди.
// Цим самим ви маєте симулювати написання даного тексту юзером. 
// Приклад: "Hello"
// Затримки:
// H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

// #task
function h(hh) {
    return new Promise((resolve, reject) => {
        console.log('<<Step 1>>')
        setTimeout(() => {
            if (hh == true) {
                resolve('H');
            } else {
                reject('ERROR1');
            }
        }, Math.floor(Math.random() * Math.floor(600)))
    })
}

function e(ee) {
    return new Promise((resolve, reject) => {
        console.log('<<Step 2>>')
        setTimeout(() => {
            if (ee == true) {
                resolve('e');
            } else {
                reject('ERROR2');
            }
        }, Math.floor(Math.random() * Math.floor(100)))
    })
}

function l(ll) {
    return new Promise((resolve, reject) => {
        console.log('<<Step 3>>')
        setTimeout(() => {
            if (ll == true) {
                resolve("l");
            } else {
                reject('ERROR3');
            }
        }, Math.floor(Math.random() * Math.floor(300)))
    })
}

function o(oo) {
    return new Promise((resolve, reject) => {
        console.log('<<Step 5>>')
        setTimeout(() => {
            if (oo = true) {
                resolve("o");
            }
            reject("ERROR5");
        }, Math.floor(Math.random() * Math.floor(700)))
    })
}
async function typingMashineSimulation() {
    let myVal = document.getElementById('text')
    console.log(myVal.textContent);
    try {
        const one = await h(true);
        myVal.textContent=one;
        console.log(myVal.textContent)

        
        const two = await e(true);
        myVal.textContent=one+two;
        console.log(myVal.textContent)

        const three = await l(true);
        myVal.textContent=one+two+three;
        console.log(myVal.textContent)

        const four = await l(true);
        myVal.textContent=one+two+three+four;
        console.log(myVal.textContent)

        const five = await o(true);
        myVal.textContent=one+two+three+four+five;
        console.log(myVal.textContent)

    } catch (err) {
        console.log('<<<<<<<<<<<<<<error>>>>>>>>>>>>>>>')
        console.log(err)
        console.log('++++++++++++++++++++++++++++++++++')
    }
}
typingMashineSimulation()