// ==============================================
//  1 -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

// a,div,h1,span,input,form,option,select
console.log('_____________task#1_____________')
function Tegs(name, description, attribute0 ){
    this.tagAttribute0 = attribute0;
    this.tagName = name;
    this.tagDescription = description;
}
let tegA = new Tegs('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{'accesskey':'Активация ссылки с помощью комбинации клавиш'}, {'coords': 'Устанавливает координаты активной области.'}]);
console.log(tegA);
let tegDiv = new Tegs('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ', [{'align': 'Задает выравнивание содержимого тега <div>.'}, {'title': 'Добавляет всплывающую подсказку к содержимому.'}]);
console.log(tegDiv);
let tegH1 = new Tegs('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня,', [{'align': 'Определяет выравнивание заголовка.'}]);
console.log(tegH1);
let tagSpan = new Tegs('span', 'Тег <span> предназначен для определения строчных элементов документа.', [{'accesskey': 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'}, {'class': 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}] );
console.log(tagSpan);
let tagInput = new Tegs('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{'accept': 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}, {'autofocus': 'Устанавливает фокус в поле формы.'}] );
console.log(tagInput);
let tagForm = new Tegs('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [{'accept-charset': 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'}, {'enctype': 'Способ кодирования данных формы.'}] );
console.log(tagForm);
let tagOption = new Tegs('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{'disabled': 'Заблокировать для доступа элемент списка.'}, {'lebel': 'Указание метки пункта списка.'}] );
console.log(tagOption);
let tagSelect = new Tegs('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ', [{'multiple': 'Позволяет одновременно выбирать сразу несколько элементов списка.'}, {'required': 'Список обязателен для выбора перед отправкой формы.'}] );
console.log(tagSelect);

// ==============================================
// 2 -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select

console.log('_____________task#2_____________')
class TegsClass{
    constructor(name, description, attribute0 ){
        this.tagAttribute0 = attribute0;
        this.tagName = name;
        this.tagDescription = description;
    }
}
let tegAclass = new TegsClass('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок', [{'accesskey':'Активация ссылки с помощью комбинации клавиш'}, {'coords': 'Устанавливает координаты активной области.'}]);
console.log(tegAclass);
let tegDivClass = new TegsClass('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. ', [{'align': 'Задает выравнивание содержимого тега <div>.'}, {'title': 'Добавляет всплывающую подсказку к содержимому.'}]);
console.log(tegDivClass);
let tegH1Class = new TegsClass('h1', 'тег <h1> представляет собой наиболее важный заголовок первого уровня,', [{'align': 'Определяет выравнивание заголовка.'}]);
console.log(tegH1Class);
let tagSpanClass = new TegsClass('span', 'Тег <span> предназначен для определения строчных элементов документа.', [{'accesskey': 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'}, {'class': 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}] );
console.log(tagSpanClass);
let tagInputClass = new TegsClass('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.', [{'accept': 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'}, {'autofocus': 'Устанавливает фокус в поле формы.'}] );
console.log(tagInputClass);
let tagFormClass = new TegsClass('form', 'Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером.', [{'accept-charset': 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.'}, {'enctype': 'Способ кодирования данных формы.'}] );
console.log(tagFormClass);
let tagOptionClass = new TegsClass('option', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{'disabled': 'Заблокировать для доступа элемент списка.'}, {'lebel': 'Указание метки пункта списка.'}] );
console.log(tagOptionClass);
let tagSelectClass = new TegsClass('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ', [{'multiple': 'Позволяет одновременно выбирать сразу несколько элементов списка.'}, {'required': 'Список обязателен для выбора перед отправкой формы.'}] );
console.log(tagSelectClass);

// ==============================================
// 3 - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
// Додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
console.log('OBJECT_________task#3_____________')

const carObject  = {
    model: 'duster',
    producer: 'reno',
    yearOfManufacture: '2007',
    maxSpeed:'1000',
    volume: '1.6',
    driver:'Andrii',
    drive:function(speed){
           console.log(`їдемо зі швидкістю ${speed} на годину`)
         },
    info:function(){
                 console.log(`model - ${carObject.model},\nproducer - ${carObject.producer},\nyearOfManufacture - ${carObject.yearOfManufacture},\nmaxSpeed - ${carObject.maxSpeed},\nvolume - ${carObject.volume},\nowner - ${carObject.driver}`);
             },
    increaseMaxSpeed:function (newSpeed){
        carObject.maxSpeed=newSpeed;
         console.log(`new max speed ${carObject.maxSpeed}`)
     },
     changeYear:function(newValue){
        carObject.yearOfManufacture=newValue;
        console.log(`new year ${carObject.yearOfManufacture}`)
     },
     addDriver:function (driver){
        carObject.driver={name}  
        console.log(`owner is ${driver}`)     
    }
        }
        carObject.drive(444);
        carObject.info();
        carObject.increaseMaxSpeed(777);
        carObject.changeYear(1987);
        carObject.addDriver('Nazar');
// ==============================================
// 4 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
console.log('FUNCTION CONSTRUCTOR________task#4_____________')
function CarFunc(model, producer, yearOfManufacture, maxSpeed, volume, driver){
        this.model = model;
        this.producer = producer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = driver;
        this.drive = function(speed){
            console.log(`їдемо зі швидкістю ${speed} на годину`)
        },
        this.info = function(){
        console.log(`model - ${this.model},\nproducer - ${this.producer},\nyearOfManufacture - ${this.yearOfManufacture},\nmaxSpeed - ${this.maxSpeed},\nvolume - ${this.volume},\nowner - ${this.driver}`);
    },
        this.increaseMaxSpeed=function(newSpeed){
        this.maxSpeed=newSpeed;
        console.log(`new max speed ${this.maxSpeed}`)
    },
        this.changeYear=function(newValue){
        this.yearOfManufacture=newValue;
        console.log(`new year ${this.yearOfManufacture}`)
    },
    
        this.addDriver=function (driver){
        this.driver={name}
        console.log(`owner is ${driver}`)
     }
}
let myCarFunc = new CarFunc('duster', 'reno', '2007', '220', '1.6');
myCarFunc.drive(34);
myCarFunc.info();
myCarFunc.increaseMaxSpeed(56);
myCarFunc.changeYear(2020);
myCarFunc.addDriver('Anna');



// ==============================================
// 5 - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
console.log('CLASS_______task#5_____________')
class Car{
    constructor(model, producer, yearOfManufacture, maxSpeed, volume, driver ){
        this.model = model;
        this.producer = producer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = driver;

    }
    drive(speed){
        console.log(`їдемо зі швидкістю ${speed} на годину`)
    }

    info(){
        console.log(`model - ${this.model},\nproducer - ${this.producer},\nyearOfManufacture - ${this.yearOfManufacture},\nmaxSpeed - ${this.maxSpeed},\nvolume - ${this.volume},\nowner - ${this.driver}`);
    }
    increaseMaxSpeed (newSpeed){
        this.maxSpeed=newSpeed;
        console.log(`new max speed ${this.maxSpeed}`)
    }
    changeYear(newValue){
        this.yearOfManufacture=newValue;
        console.log(`new year ${this.yearOfManufacture}`)
    }

    addDriver (driver){
        this.driver={name}
        console.log(`owner is ${driver}`)
       
    }
}
let myCar = new Car('duster', 'reno', '2007', '220', '1.6');
myCar.drive(120);
myCar.info();
myCar.increaseMaxSpeed (230);
myCar.changeYear(2008);
myCar.addDriver('Andrii');

// ==============================================
// 6 -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
 console.log('CLASS_______task#6_____________')
class CindrellaClass{
    constructor(name, age, size){
    this.name =name;
    this.age =age;
    this.size =size;}
}
let alina0 = new Cindrella('Alina', 18, 36);
let tania0 = new Cindrella('Tania', 22, 40);
let ivanna0 = new Cindrella('Ivanna', 21, 38);
let anna0 = new Cindrella('Anna', 24, 37);
let lina0 = new Cindrella('Lina', 23, 34);
let katia0 = new Cindrella('Katia', 17, 39);
const cinArray0 = [alina0,tania0,ivanna0,anna0,lina0,katia0]
console.log(cinArray0);
class Prince0 {
    constructor(name, age, shoose){
    this.name =name;
    this.age =age;
    this.shoose =shoose;}
    findLove0=(cinArray) => {
        for(const index of cinArray){
            if(index.size===prince0.shoose){
                console.log(`they are ${index.name} and ${prince0.name} falling in love`);
}}}}
let prince0 = new Prince0('Andrii', 25, 37);
prince0.findLove0(cinArray0);


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
console.log('CONSTRUCTOR FUNCTION______task#7_____________')
function Cindrella(name, age, size){
    this.name =name;
    this.age =age;
    this.size =size;
}
let alina = new Cindrella('Alina', 18, 36);
let tania = new Cindrella('Tania', 22, 40);
let ivanna = new Cindrella('Ivanna', 21, 38);
let anna = new Cindrella('Anna', 24, 37);
let lina = new Cindrella('Lina', 23, 34);
let katia = new Cindrella('Katia', 17, 39);
const cinArray = [alina,tania,ivanna,anna,lina,katia]
console.log(cinArray);
function Prince(name, age, shoose){
    this.name =name;
    this.age =age;
    this.shoose =shoose;

    this.findLove=(cinArray) => {
        for(const index of cinArray){
            if(index.size===prince.shoose){
                console.log(`they are ${index.name} and ${prince.name} falling in love`);
}}}}
let prince = new Prince('Andrii', 25, 37);
prince.findLove(cinArray);

