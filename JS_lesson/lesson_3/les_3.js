// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

const objDog  = {
    name: 'Vulkan',
    breed: 'akbash',
    age: 7,
    weight:22,
    lilfespan:10-12
}
console.log(objDog);
const objPerson  = {
    name: 'Makar',
    lastName: 'Bardash',
    age: 27,
    weight:77,
    flat: true
}
console.log(objPerson);
const objVehicle  = {
    model: 'opel',
    volEngine: 2.5,
    age: 3,
    weight:1000,
    fuel: 'petrol',
    prize:4500
}
console.log(objVehicle);
const objApartment  = {
    balcons: 2,
    floor: 1,
    sqm: 59,
    rooms:3,
    prize:27000
}
console.log(objApartment);
const objBook = {
    name: "Witcher",
    autor: "Andrii Sapcowskyj",
    pages: 287,
    part:8,
    lang:'ukr'
}
console.log(objBook);

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
let objDog_0 = objDog;
let objDog_1 = objDog;
let objDog_2 = objDog;
let objDog_3 = objDog;

let objDogJSON = JSON.stringify(objDog);
let objDog_4 = JSON.parse(objDogJSON);

console.log(objDogJSON);
console.log(objDog_4);
objDog_4.name = 'Barsik';
let  arrayDogs  = [objDog,objDog_0,objDog_1,objDog_2,objDog_3,objDog_4]
let i=0;
while(i<arrayDogs.length){
    console.log(arrayDogs[i]);
    i++
}
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
const objBuilding = {
    name: 33,
    street: "Mykolaivska",
    floors: 8,
    flat:{
        room:3,
        balcony:2,
        floor:1,
        number:2
         },
    lang:'ukr'
}
console.log(objBuilding);

// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
console.log(users[7].status);
console.log(users[4].status);
console.log(users[9].name);
console.log(users[3].name);
console.log(users[6].age);
console.log(users[3].age);
console.log(users[4].name+' '+users[4].age);
console.log(users[5].age+' '+users[5].status);

