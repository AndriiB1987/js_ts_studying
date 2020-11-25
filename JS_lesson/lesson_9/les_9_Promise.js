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

console.log('_________________________________________Promises approach');
let myRand = 0.3;
function myDay() {
    return new Promise((resolve, reject) => {
      console.log('<<I am sleeping.. Morning is coming ..>>');
      console.log('<<It is time to wake up>>');
  
      setTimeout(() => {  
        if (Math.random() > myRand) {
          resolve('\nNext what I need to dring a water');
        } else {
          reject('I have overslept');
        }
      }, 1000);
    })
  }
  function drinkWater() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        
        console.log('<<I HAVE to drink a hot water>>')
        if (Math.random > myRand) {
        resolve('to drink water in the morning is very good idea,\nNext I need to do is take a shower');
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
      if(Math.random > myRand){
      resolve("3 - I almost waking up,\nNext I need to get to work");
      }else{
            reject(`3 - there is no hot water:((`);
      }
  }, 1000)
  })
}
function brushTeath(){
  return new Promise((resolve,reject) => {
    console.log('<<teeth case>>');
  setTimeout(()=>{
    if(Math.random > myRand){
      resolve(` well DONE also`)
    }else{
        reject('4- what a pity, I forgot to brush my teeth, ok will do it next time')
      }

},1000)
})
}
function gettingToWork(){
  return new Promise((resolve,reject) => {
  setTimeout(()=>{
    console.log('<<I am gettin to work>>')
    if(Math.random > myRand){
      resolve("5 - I am at office already,\nNext what I will have is the brakfest - ");
  }
  reject("5 - Today I got by feet");
}, 1000)
  })
}
  myDay()
    .then((alarm) => {
      console.log(`-------------------------------------------------`);
      console.log(`1 - Good morning, my alarm clock was set up - ${alarm}`);
      console.log(`-------------------------------------------------`);
      return drinkWater();
    })
    .then(water => {
      console.log(`-------------------------------------------------`);
      console.log(`2- my thoughts  -  ${water}`); 
      console.log(`-------------------------------------------------`);
      return takingShower();
    })
    .then(hotWaterData => {
      console.log(`-------------------------------------------------`);
      console.log(hotWaterData);
      console.log(`-------------------------------------------------`);
      return brushTeath();
    })
    .then(past => {
      console.log(`-------------------------------------------------`);
      console.log(`'4 - I have fresh breath \nNext I will go out - ${past}`);
      console.log(`-------------------------------------------------`);
      return gettingToWork();
    })
    .then(car => {
      console.log(`-------------------------------------------------`);
      console.log(`${car}`);
      console.log(`-------------------------------------------------`);
    })
    .catch(err => {
      console.log('_________Somethink went wrong________')
      console.log(err)
      console.log('|____________________________________|')
    })
    .finally(() => {
      console.log('FINAL');
    })