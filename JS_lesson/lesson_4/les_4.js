// 1 - створити функцію яка виводить масив
console.log('_____________task#1_____________')
let myArray=[3,2,4,5,6,7,8,9];
function getArray (someArray){
    for(let i=0; i<someArray.length;i++)
    {
        console.log(someArray[i])
    }   
//console.log(someArray);
}
getArray(myArray)


// 2 - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
console.log('_____________task#2_____________')
let randomArrey = [];
function createRandomArray (arrRand){
    for(let i=0; i<7;i++)
    {
        arrRand.push(Math.random())
    }   
    //return arrRand;
}
createRandomArray(randomArrey);
getArray(randomArrey);

// 3- створити функцію яка приймає три числа та виводить та повертає найменьше.
console.log('_____________task#3_____________')
function threeIntSmaller (a,b,c){
    if(a<b && a<c){
        console.log(a)
                }else{
                    if(b<a && b<c){console.log(b)}
                        else {console.log(c)}
                }
}
threeIntSmaller(23,55,2)

// 4- створити функцію яка приймає три числа та виводить та повертає найбільше.
console.log('_____________task#4_____________')
function threeIntBigger (a,b,c){
    if(a>b && a>c){
        console.log(a)
                }else{
                    if(b>a && b>c){console.log(b)}
                        else {console.log(c)}
                }
}
threeIntBigger(3,7,9)

// 5- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
console.log('_____________task#5_____________')
 function argsNumbMinMax(){
    let min = arguments[0];
    let max = arguments[0];

    for(const i of arguments)
    {
        if (i>max) max=i;
        if (i<min) min=i;
    }  
    console.log(max)
    return min;
 }
 const myMin = argsNumbMinMax(7,2,77,4,45,67,89,33,56,99,1);
 console.log(myMin)

// 6- створити функцію яка повертає найбільше число з масиву
console.log('_____________task#6_____________')
 const myArrayMax=[2,3,77,78,45,88,34,87,2,1,39]

 function maxNumOfArr(arr1){
    let maxOfArr=arr1[0];
    for(const j of arr1)
   {
    if (maxOfArr<j) maxOfArr=j;  
   }
   return maxOfArr;
}
const myMax = maxNumOfArr(myArrayMax);
console.log(myMax)

// 7- створити функцію яка повертає найменьше число з масиву
console.log('_____________task#7_____________')
function minNumOfArr(arr1){
    let minOfArr=arr1[0];
    for(const j of arr1)
   {
    if (minOfArr>j) minOfArr=j;  
   }
   return minOfArr;
}
const myMin1 = minNumOfArr(myArrayMax);
console.log(myMin1)

// 8 - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
console.log('_____________task#8_____________')
function getArrayAndReturn(arr2){
    let newValue=0;
    for(let j =0; j<arr2.length;j++){
        newValue+=arr2[j] 
    }
    return newValue;
}
let sumOfValue = getArrayAndReturn(myArrayMax)
console.log(sumOfValue)

// 9 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('_____________task#9_____________')
function getArrayAverage(arr2){
    let newValue=0;
    for(let j =0; j<arr2.length;j++){
        newValue+=arr2[j] 
    }
    return newValue/arr2.length;
}
let avrg = getArrayAverage(myArrayMax)
console.log(avrg)

// 10 - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
console.log('_____________task#10_____________')
function countOfIndexes (arr){
//let valueIdxes=0;
for (const j of arr) return arr.length
}
let count = countOfIndexes(myArrayMax)
console.log(count)

// 11 - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
console.log('_____________task#11_____________')
const myObjects =[
     objDog  = {
        name: 'Vulkan',
        breed: 'akbash',
        age: 7,
        weight:22,
        lilfespan:10-12
    },
objPerson  = {
        name: 'Makar',
        lastName: 'Bardash',
        age: 27,
        weight:77,
        flat: true
    },
 objVehicle  = {
        model: 'opel',
        volEngine: 2.5,
        age: 3,
        weight:1000,
        fuel: 'petrol',
        prize:4500
    },
    objVehicle2  = {
        model: 'opel',
        volEngine: 2.5,
        age: 3,
        weight:1000,
        fuel: 'petrol',
        prize:4500
    }
]

function getAllKeys(arr){
    let keyses=0;
    for(let j of arr){
        if (typeof j === 'object' && !Array.isArray(j)){
        keyses ++;
    }
}
return keyses;
}
let count1 = getAllKeys(myObjects);
console.log(count1)

// 12 - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
console.log('_____________task#12_____________')
let array1=[3,3,3,3,3,]
let array2=[3,3,3,3,3,]
function newArrFromFewOld(arr1,arr2){
const newArray=[];
for(let j of arr1){
    newArray.push(arr1[j]+arr2[j])
}
return newArray;
}
let myNewSplit = newArrFromFewOld(array1,array2)
console.log(myNewSplit)


// 13 - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
console.log('_____________task#13_____________')
let arrayIndex=[1,2,3,4];
function arrayAndIndex(arr,i){
    let array = [...arr];
    if(i<array.length-1){
        let temp = array[i];
        array[i]= array[i+1];
        array[i+1] = temp;
    }
    return array;
}
let arrayWithNewIndex = arrayAndIndex(arrayIndex,2)
console.log(arrayIndex)
console.log(arrayWithNewIndex)

// 14 - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
console.log('_____________task#14_____________')
let changeArr0 = [1,0,6,0,3];
let changeArr1 = [0,1,2,3,4];
let changeArr2 = [0,0,1,0];
function moveElementsOfArray (arr){
    let arrForZero = [];
    let arrForNum = [];
    for(const item of arr){
        if(item===0){
            arrForZero.push(0);
        }else{
            arrForNum.push(item);
        }
    }
    return arrForNum.concat(arrForZero);
    //return [...arrForNum,...arrForZero]
    //there is one more variant with "splice" approach
}
console.log(moveElementsOfArray(changeArr0))
console.log(moveElementsOfArray(changeArr1))
console.log(moveElementsOfArray(changeArr2))

// 15 Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
console.log('<<<<<<<<<____task#15_____________')
function addMyDiv (message,typeTag){
    const tag= document.createElement(typeTag)
    tag.innerHTML = message || "Hello OWU";
    document.body.appendChild(tag);
}
addMyDiv (null,'div')
// 16 - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
console.log('<<<<<<<<<____task#16_____________')
//myList
const myCars =[
    objVehicle3  = {
        model: 'opel5',
        volEngine: 2.5,
        age: 3,
        weight:1000,
        fuel: 'petrol',
        prize:4500
    },
   objVehicle0  = {
    model: 'opel3',
    volEngine: 2.5,
    age: 3,
    weight:1000,
    fuel: 'petrol',
    prize:4500
},
objVehicle  = {
       model: 'opel',
       volEngine: 2.5,
       age: 3,
       weight:1000,
       fuel: 'petrol',
       prize:4500
   },
   objVehicle2  = {
       model: 'opel1',
       volEngine: 2.5,
       age: 3,
       weight:1000,
       fuel: 'petrol',
       prize:4500
   }
]
function setArrayOfCar(arr,myId){
const myBlock = document.getElementById(myId);
const ul = document.createElement('ul');
for(let i=0; i<arr.length; i++){
    const car = arr[i];
    const li = document.createElement('li');
    li.innerHTML = `${i+1} - ${car.model}`;
    ul.appendChild(li);
    }
    myBlock.appendChild(ul);
}
setArrayOfCar(myCars,'myList')

// - Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.


// 17 - Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
console.log('<<<<<<<<<____task#17_____________')
function setArrayOfCar0(arr,myId){
    const myBlock0 = document.getElementById(myId);
    for(let i=0; i<arr.length; i++){
         const car = arr[i];
         const div = document.createElement('div');
         const volEngine = document.createElement('h2');
         const age = document.createElement('h3');
         const weight = document.createElement('h4');
        volEngine.innerHTML = `model : ${car.model}`;
        age.innerHTML = `age : ${car.age}`;
        weight.innerHTML = `weight : ${car.weight}`;
        div.appendChild(volEngine);
        div.appendChild(age);
        div.appendChild(weight);
        myBlock0.appendChild(div);
        }
    }
    setArrayOfCar0(myCars,'myList');

//     (на основі минулого ДЗ)
// 18 **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
console.log('_____________task#18_______');
function mergeTwoObjects(arr1,arr2){
    let users = JSON.parse(JSON.stringify(arr1));
    let cities = JSON.parse(JSON.stringify(arr2));
    for(const city of cities){
        for(const user of users){
            if(city.user_id===user.id){
                user.adress = city;
            }
        }
    }
return users;
}
const mergedArray = mergeTwoObjects(usersWithId,citiesWithId);
console.log(mergedArray);

