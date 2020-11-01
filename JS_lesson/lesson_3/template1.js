// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
let txtFromId0 = document.getElementById('content');
// - отримує текст з блоку з id "rules"
let txtFromId1 = document.getElementById('rules');
// - замініть текст параграфа з id 'content' на будь-який інший
txtFromId0.innerText = 'Вітаю на платформі ';
// - замініть текст параграфа з id 'rules' на будь-який 
txtFromId1.innerText = 'Fight club';
// - змініть кожному елементу колір фону на червони.
txtFromId0.style.backgroundColor='red';
txtFromId1.style.backgroundColor='green';
// - змініть кожному елементу колір тексту на синій
txtFromId0.style.color ='blue';
txtFromId1.style.color ='blue';
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
let allClassesOfRules1 = document.getElementsByClassName('fc bp');
console.log(allClassesOfRules1);
// - отримати всі елементи з класом fc_rules
let allClassesOfRules = document.getElementsByClassName('fc_rules');
console.log(allClassesOfRules);

// let name = document.getElementsByTagName('br');


console.log(txtFromId0);
 console.log(txtFromId1);
