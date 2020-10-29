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
    document.write('<div>new block </div>');
 }