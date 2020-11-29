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

console.log('_________________________________________CallBack approach');
let myRand = 0.3;
  function myDay(taskWhenReady) {
    console.log('<<I am sleeping.. Morning is coming ..>>');
       setTimeout(() => {
         console.log('<<It is time to wake up>>');  
        //  if (alarm == true) {
         if (Math.random() > myRand) {

           console.log(`-------------------------------------------------`);
           taskWhenReady('I have overslept' , null);
           console.log(`-------------------------------------------------`);
           return;
         }
         taskWhenReady(null, '\nNext what I need to dring a water');
       }, 1000);
     }
    //  ______________попити теплої водички
    function drinkWater(myWaterCallBack){
      setTimeout(()=>{
        console.log('<<I HAVE to drink a hot water>>')
        if(Math.random() > myRand){
          myWaterCallBack("???? - ", null);
          return;
      }
      myWaterCallBack(null, " 'to drink water in the morning is very good idea',\nNext I need to do is take a shower");
    }, 1000)
    }
  // ___________________прийняти душ
  function takingShower(myHotWaterCallBack){
    setTimeout(()=>{
      console.log('<<water is greate>>')
      if(Math.random() > myRand){
        myHotWaterCallBack("dddddddddddddddf - ", null);
        return;
    }
    myHotWaterCallBack(null, "I almost waking up,\nNext I need to get to work");
  }, 1000)
  }
  
  //________________________почистити зуби
  function brushTeath(bTeeth){
    setTimeout(()=>{
      if(Math.random() > myRand){
    bTeeth(`4 - to brush teeth is DONE also`,null)}
    console.log(`-------------------------------------------------`);
    bTeeth(null, '4 - I have fresh breath \nNext I will go out')
    console.log(`-------------------------------------------------`);
  },1000)
  }
  
  function gettingToWork(gettingToWork){
    setTimeout(()=>{
      console.log('<<I am gettin to work>>')
      if(Math.random() > myRand){
        gettingToWork("go to work - ", null);
         return;
    }
    gettingToWork(null, "Today I got by car,\nNext what I will have is the brakfest");
  }, 1000)
  }
  
  
  
  myDay((err, tour) => {
       if (err) {
         console.log('1 -I have not to forget setting up my alarm clock in the future');
         console.log('I am so sorry -', err);         
            }else{
            console.log(`-------------------------------------------------`);
            console.log(`1 - Good morning, my alarm clock was set up - ${tour}`);
            console.log(`-------------------------------------------------`);
            //1-------------------------------водичка
             drinkWater((err, date) => {
                if(err){
                  console.log(`-------------------------------------------------`);
                  console.log('2 - there is no water');
                  console.log(`-------------------------------------------------`);                  
                    }else{
                     console.log(`-------------------------------------------------`);
                     console.log(`2 - my thoughts - ${date}`);
                     console.log(`-------------------------------------------------`);
                       //2-------------------------------душ
                      takingShower((err, date) => {
                        if(err){
                          console.log(`-------------------------------------------------`);
                          console.log(`3 - there is no hot water:((`);    
                          console.log(`-------------------------------------------------`);                      
                          }else{
                          console.log(`-------------------------------------------------`);
                          console.log(`3 - the water was great  - ${date}`);
                          console.log(`-------------------------------------------------`);
                           //  ______________________________зуби
                              brushTeath((err,date)=>{
                               if(err){
                                  console.log(`-------------------------------------------------`);
                                  console.log('4  - what a pity, I forgot to brush my teeth, ok will do it next time');
                                  console.log(`-------------------------------------------------`);                                 
                                  }else{
                                        console.log(date);
                                         //  ______________________________дорога до роботи
                                         gettingToWork((err, date) => {
                                             if(err){
                                                console.log(`-------------------------------------------------`);
                                                console.log(`5 - there is some problem:((`);
                                                console.log(`-------------------------------------------------`);
                                                
                                                     }else{
                                                           console.log(`-------------------------------------------------`);
                                                           console.log(`5 - I am at office now  - ${date}`);
                                                          console.log(`-------------------------------------------------`);
                                                        }
                                                      })
                                              }
                                        })
                                  }
                              })
                        } 
              })
        }
});