
// 1- присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

let saySmthnk='hello';
let courses='owu';
let globalDomain='com'; 
let localDomain='ua'; 
let n0=1; 
let n1=10;
let n2=-999;
let n3=123;
let pi=3.14;
let n5=2.7;
let n6=16;
let owuGoodCourses=true;
let smth=false;
console.log(saySmthnk);
alert(saySmthnk);
document.write(saySmthnk+'<br>');

console.log(courses);
alert(courses);
document.write(courses+'<br>');

console.log(globalDomain);
alert(globalDomain);
document.write(globalDomain+'<br>');

console.log(localDomain);
alert(localDomain);
document.write(localDomain+'<br>');

console.log(n0);
alert(n0);
document.write(n0+'<br>');

console.log(n1);
alert(n1);
document.write(n1+'<br>');

console.log(n2);
alert(n2);
document.write(n2+'<br>');

console.log(n3);
alert(n3);
document.write(n3+'<br>');

console.log(pi);
alert(pi);
document.write(pi+'<br>');

console.log(n5);
alert(n5);
document.write(n5+'<br>');

console.log(n6);
alert(n6);
document.write(n6+'<br>');

console.log(owuGoodCourses);
alert(owuGoodCourses);
document.write(owuGoodCourses+'<br>');

console.log(smth);
alert(smth);
document.write(smth+'<br>');

// 2- переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log , alert, document.write

saySmthnk='hi';
courses='english';
globalDomain='.com'; 
localDomain='ua.vn'; 
n0=77; 
n1=7777;
n2=-777777;
n3=172737;
pi=3.14777;
n5=2.777;
n6=16777;
owuGoodCourses=false;
smth=true;

console.log(saySmthnk);
alert(saySmthnk);
document.write(saySmthnk +'<br>');

console.log(courses);
alert(courses);
document.write(courses+'<br>');

console.log(globalDomain);
alert(globalDomain);
document.write(globalDomain+'<br>');

console.log(localDomain);
alert(localDomain);
document.write(localDomain+'<br>');

console.log(n0);
alert(n0);
document.write(n0+'<br>');

console.log(n1);
alert(n1);
document.write(n1+'<br>');

console.log(n2);
alert(n2);
document.write(n2+'<br>');

console.log(n3);
alert(n3);
document.write(n3+'<br>');

console.log(pi);
alert(pi);
document.write(pi+'<br>');

console.log(n5);
alert(n5);
document.write(n5+'<br>');

console.log(n6);
alert(n6);
document.write(n6+'<br>');

console.log(owuGoodCourses);
alert(owuGoodCourses);
document.write(owuGoodCourses+'<br>');

console.log(smth);
alert(smth);
document.write(smth+'<br>');

// 3- Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const constMy0=3.777;
const constMy1=777.14;
const constMy2=7.74;

const stringConst0='const_example0';
const stringConst1='const_example1';
const stringConst2='const_example2';

console.log(constMy0);
alert(constMy0);
document.write(constMy0+'<br>');

console.log(constMy1);
alert(constMy1);
document.write(constMy1+'<br>');

console.log(constMy2);
alert(constMy2);
document.write(constMy2+'<br>');

console.log(stringConst0);
alert(stringConst0);
document.write(stringConst0+'<br>');

console.log(stringConst1);
alert(stringConst1);
document.write(stringConst1+'<br>');

console.log(stringConst2);
alert(stringConst2);
document.write(stringConst2+'<br>');

// 4- при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let userLastName = prompt('What is your last name');
let userName = prompt('What is your name');
let userMiddleName = prompt('What is your middle name');

console.log(userLastName);
alert(userLastName);
document.write(userLastName+'<br>');

console.log(userName);
alert(userName);
document.write(userName+'<br>');

console.log(userMiddleName);
alert(userMiddleName);
document.write(userMiddleName+'<br>');

// 5- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let fullName = userLastName+' '+userName+' '+userMiddleName;

console.log(fullName);
// 6- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let sonsLastName = prompt('What is sons last name');
let sonsName = prompt('What is sons name');
let sonsMiddleName = prompt('What is sons middle name');
let sonsfullName = sonsLastName+' '+sonsName+' '+sonsMiddleName;

console.log(sonsfullName);

let wifesLastName = prompt('What is wifes last name');
let wifesName = prompt('What is wifes name');
let wifesMiddleName = prompt('What is wifes middle name');
let wifesfullName = wifesLastName+' '+wifesName+' '+wifesMiddleName;

console.log(wifesfullName);

// 7- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

let numb1 = prompt('What is numb1');
let numb2 = prompt('What is numb2');
let numb3 = prompt('What is numb3');
let numbSum = numb1+numb2+numb3;
console.log(numbSum);

// 13- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
    // 5 < 6 -> true
    // 5 == 6 -> false
    // 5 <= 6 -> false
    // 5 >= 6 -> false
    // 10 <= 10 -> true
    // 10 >= 10 -> true
    // 10 < 10 -> false
    // 10 > 10 -> false
    // 10 ? 10 -> false
    // 123 === '123' -> false
    // 123 == '123' -> true