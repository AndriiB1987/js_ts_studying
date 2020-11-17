// 1 - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку
//  исчезал элемент с id="text".
// console.log('________________task#1____________________');
let myText = document.getElementById('text');
let myBtn = document.getElementById('btn_test');
myBtn.addEventListener('click',e=>{
    myText.style.color = 'black';
    console.log(myText.textContent='This text is presented');
    myText.hidden=false;
});
let myBtnColor = document.getElementById('btn_color');
myBtnColor.onclick = () =>{
    console.log(myText.textContent='This text is red know');
     myText.style.color = 'red';
     myText.style.marginRight;
 }
let form = document.forms.myForm2;
form.submit.addEventListener('click', (ev) => {
    ev.preventDefault();
    myText.style.color = 'black';
    console.log(myText.textContent='This text was hidden');
    myText.hidden=true;
    })
// 2 - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// console.log('________________task#2____________________');
let myHide = document.getElementById('btn_hide');
myHide.addEventListener('click',e=>{
 console.log('button was hidden');
 myHide.hidden=true;
 myShow.hidden= false;});
 let myShow = document.getElementById('btn_show');
 myShow.hidden= true;
 myShow.addEventListener('click',e=>{
    myHide.hidden=false
 });
// 3 - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з 
//  інпуту  та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// console.log('________________task#3____________________');
let myConfirm = document.getElementById('btn_confirm');
myConfirm.addEventListener('click',e=>{
const myInput= document.getElementById('textInput');
const value = myInput.value;
console.log(value);
    e.preventDefault();
    if(value>=18){
        alert('WELCOME')
        console.log('wlcm');
    }else
    {alert('access denied')
        console.log('access denied');}
});
// 4 - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// console.log('________________task#4____________________');
let listArray = [{title : 'УП', body:'lorem ipsum dolo sit ameti'},
    {title : 'NYTims0', body:'lorem ipsum dolo sit ameti0NYT'},
    {title : 'NYTims1', body:'lorem ipsum dolo sit ameti1NYT'},
];
const myDiv= document.getElementById('divTask_4');
listArray.forEach(item =>{
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const btn = document.createElement('button')
    btn.innerText = 'Hide'
    h2.innerText = item.title;
    p.innerText = item.body;
    p.style.margin = 0;
    btn.onclick=()=>{
        p.hidden
            ?p.hidden=false
            :p.hidden=true
    }
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(btn);
    myDiv.appendChild(div)

})

// 5 - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// console.log('________________task#5____________________');
let myConfirm0 = document.getElementById('btn_confirm_0_1');
myConfirm0.addEventListener('click',e=>{
    console.log(document.forms.myForm0.text0.value);
    console.log(document.forms.myForm0.text1.value);
    console.log(document.forms.myForm4.text2.value);
    console.log(document.forms.myForm4.text3.value);
})
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кліькіть ячеєк в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// console.log('________________task#6____________________');
function createTable(valueRow, valueCell,targetTag) {
    let valueOfRow = valueRow;
    let valueOfCell = valueCell;
    let targetOfTag = targetTag;
    let myTag = document.createElement(targetOfTag);
     let body = document.body,
        tbl  = document.createElement('table');
     //tbl.style.width  = '200px';
    // tbl.style.height = '100px';
     for(let  i = 0; i < valueOfRow; i++) {
         let tr = tbl.insertRow();
         for (let j = 0; j < valueOfCell; j++) {
             let td = tr.insertCell();
             td.style.width = '20px';
             td.style.height = '10px';
             td.appendChild(document.createTextNode(''));
             td.style.border = '1px solid black';
         }
     }
    myTag.appendChild( document.createTextNode('Task #6'));
    myTag.style.background='greenyellow';
    myTag.style.width ='200px';
    myTag.style.height ='200px';
    myTag.appendChild(tbl);
    console.log(myTag);
    body.appendChild(myTag);
}
createTable(6,7,'p');

// 7 - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// console.log('________________task#7____________________');
let myConfirm1 = document.getElementById('btn_chackParameters');
let newRows = document.getElementById('text5');
let newCell= document.getElementById('text6');
let newContent = document.getElementById('text7');
let targetOfTag = document.getElementById('text8');
function createTableFromInput(newR,newC,newCont,newT) {
let newRows1 = newR;
let newCell1 = newC;
let newContent1 = newCont;
let newTag1 = newT;
let myTag1 = document.createElement(newTag1);
let body = document.body;
let table  = document.createElement('table');
    for(let  i = 0; i < newRows1; i++) {
        let row = table.insertRow();
        for (let j = 0; j < newCell1; j++) {
            let cell = row.insertCell();
            cell.style.width = '20px';
            cell.style.height = '10px';
            cell.appendChild(document.createTextNode(newCont));
            cell.style.border = '1px solid black';
        }
    }
    let title = document.createTextNode('Task #7 ENDING');
    myTag1.appendChild(title);
    myTag1.style.background='grey';
    myTag1.style.width ='500px';
    myTag1.style.height ='300px';
    myTag1.appendChild(table);
    body.appendChild(myTag1);
    console.log(myTag1);
}
myConfirm1.addEventListener('click',e=>{
    createTableFromInput(newRows.value,newCell.value, newContent.value,targetOfTag.value);
})