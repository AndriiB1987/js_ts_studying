// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let array1=[22,44,55,66,77];
 for(let j=0;j<array1.length;j++) 
 {
     console.log(array1[j]);
 }
 let array2=['Andrii','Anna','Nazar'];
 for(let j=0;j<array2.length;j++) 
 {
     console.log(array2[j]);
 }
 let array3=['ferrari','opel','ford','renault','honda',34,45,565,346,237,false,true];
 for(let j=0;j<array3.length;j++) 
 {
     console.log(array3[j]);
 }

//  -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const emptyArray=[];
for(let j=0;j<10;j++) 
 {
     emptyArray.push(j+33);
     console.log(j+'=>'+emptyArray[j]);
 }
//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(let i=0;i<10;i++) 
 {
    document.write('<div>new block</div>');
 }
//  - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(let i=0;i<10;i++) 
 {
    document.write('<div>new for block with index ',i,'</div>');
 }
 
//  - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i =0;
while( i< 20) 
 {
    document.write('<h>new while block with "h" </h>'+'<br>');
    i++
 }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array_1=[22,44,55,66,77,88,88,99,97,53];
 for(let j=0;j<array_1.length;j++) 
 {
     console.log(array_1[j]);
 }
 let array_2=['Andrii','Anna','Nazar','Galyna','Vitaliy','Nataliya','Olexandr','Ivan','Sofia'];
 for(let j=0;j<array_2.length;j++) 
 {
     console.log(array_2[j]);
 }
 let array_3=[false,true,'ferrari','opel','ford','renault','honda',34,45,565,346,237];
 for(let j=0;j<array_3.length;j++) 
 {
     console.log(array_3[j]);
 }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

//typeof ще не розглядали

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const emptyArrayNew=[];
emptyArrayNew.push(false);
emptyArrayNew.push(77);
emptyArrayNew.push('Andr');
emptyArrayNew.push(88);
emptyArrayNew.push(99);
emptyArrayNew.push(55);
emptyArrayNew.push(true);
emptyArrayNew.push(false);
emptyArrayNew.push(34);
emptyArrayNew.push('Anna');
for(let j=0;j<10;j++) 
 {
     console.log(emptyArrayNew[j]);
 }
//  - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write   
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for(let i=0;i<10;i++) 
 {
    console.log(i);
    document.write(i+'<br>');
 }

 for(let i=0;i<100;i++) 
 {
    console.log(i);
    document.write(i+'<br>');
 }

 for(let i=0;i<100;i=i+2) 
 {
    console.log(i);
    document.write(i+'<br>');
 }

 for(let i=0;i<=100;i++) 
 {
     if(i%2==0)
     {    console.log(i);
        document.write(i+'<br>');}

 }

 for(let i=0;i<=100;i++) 
 {
     if(i%2!=0)
     {    console.log(i);
        document.write(i+'<br>');}
 }
// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши 2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// таску з годинником спробую коли буде більше вільгого часу

for(let i=0;i<=120;i++) 
{
console.log(i);
document.write(i+'<br>');
}
// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
const newArraWorlds=[ 'a', 'b', 'c'];
for(let j=0;j<3;j++) 
{
     document.write(newArraWorlds[j]);
}
document.write('<br>');
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let a=0;
while( a<newArraWorlds.length) 
{
     document.write(newArraWorlds[a]);
     a++
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово
// - for of ще не вивчали