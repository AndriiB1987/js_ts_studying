// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

console.log('_________________________________________Async Await approach');
let myRand = 0.2;
function myDay() {
    return new Promise((resolve, reject) => {
      console.log('<<I am sleeping.. Morning is coming ..>>');
      console.log('<<It is time to wake up>>');
  
      setTimeout(() => {  
        if (Math.random() > myRand) {
          resolve('Next what I need to dring a water');
        } else {
          reject('I have overslept');
        }
      }, 1000);
    })
  }

  function drinkWater() {
    return new Promise((resolve,reject) => {
      console.log('<<I HAVE to drink a hot water>>')
      setTimeout(() => {
        if (Math.random() > myRand) {
        resolve('to drink water in the morning is very good idea Next I need to do is take a shower');
      }else{
        reject('I forgot to drink water');
      }
      }, 1000)
    })
  }

  function takingShower(){
    return new Promise((resolve, reject) => {
      console.log('<<water is greate>>')
      setTimeout(()=>{
      if(Math.random() > myRand){
      resolve("3 - I almost waking up Next I need to get to work");
      }else{
            reject('3 - there is no hot water:((');
      }
  }, 1000)
  })
}

function brushTeath(){
  return new Promise((resolve,reject) => {
    console.log('<<teeth case>>');
  setTimeout(()=>{
    if(Math.random() > myRand){
      resolve('4 - well DONE also')
    }else{
        reject('4- what a pity, I forgot to brush my teeth, ok will do it next time')
      }

},1000)
})
}
function gettingToWork(){
  return new Promise((resolve,reject) => {
    console.log('<<I am gettin to work>>')
  setTimeout(()=>{
    if(Math.random() > myRand){
  resolve("5 - I am at office already, Next what I will have is the brakfest - ");
  }
  reject("5 - Today I got by feet");
}, 1000)
  })
}

 async function myAsAwFunc(){
try{
const one = await myDay();
console.log(one, 1)

const two = await drinkWater();
console.log(two, 2)

const three = await takingShower();
console.log(three, 3)

const four = await brushTeath();
console.log(four, 4)

const five = await gettingToWork();
console.log(five, 5)

} catch(err){
  console.log('<<<<<<<<<<<<<<error>>>>>>>>>>>>>>>')
  console.log(err)
  console.log('++++++++++++++++++++++++++++++++++')
}
 }

 myAsAwFunc()