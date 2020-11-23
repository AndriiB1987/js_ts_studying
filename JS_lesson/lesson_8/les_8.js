//  1  - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
console.log('<<<___________task_1______________');
let myConfirm = document.getElementById('btn_safe');
let myInputText = document.getElementById('text0');
let fromLocalStorage = document.getElementById('myText');
fromLocalStorage.innerText = localStorage.getItem('usersText');
console.log('my local storage value -'+ fromLocalStorage.innerText);
function ifUserReloadPage(inpText){
    let typingText = inpText;
    let textInBrowser = document.getElementById('myText');
    textInBrowser.innerText = typingText.value;
    console.log('what user had typed   - '+ typingText.value);
    localStorage.setItem('usersText',typingText.value)
}
myConfirm.addEventListener('click',e=>{
    ifUserReloadPage(myInputText);
    myInputText.value ='';
})

// 2   - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
console.log('<<<___________task_2______________');
let myInputText1 = document.getElementById('text1');
let myCheckbox0 = document.getElementById('checkbox0');
let myRadio0 = document.getElementById('radio0');
let myRadio1 = document.getElementById('radio1');
let mySelect = document.getElementById('cars');

console.log('____________________for select menu');
mySelect.addEventListener("change", e=>{
    console.log(mySelect.value);
    localStorage.setItem('usersSelect',mySelect.value)
});
let mySelectFromLS = localStorage.getItem('usersSelect');
console.log('from LOCAL S - '+ mySelectFromLS);
mySelect.value=mySelectFromLS;

console.log('____   _____  ___  __for TEXT');
myInputText1.addEventListener('input', e=>{
    console.log(myInputText1.value);
    localStorage.setItem('usersInputValue',myInputText1.value)
});
let myTextFromLS = localStorage.getItem('usersInputValue');
console.log('my TEXT from localS - '+ myTextFromLS);
myInputText1.value=myTextFromLS;

console.log('___  _____   ____   ___for Radio BTN');
myRadio0.addEventListener("change", e=>{
    // console.log(myRadio0.value);
    // if(myRadio0.checked ==true){
    localStorage.setItem('usersClickOnRadioBtn0',true)
    localStorage.setItem('usersClickOnRadioBtn1',false)
});
myRadio1.addEventListener("change", e=>{
    localStorage.setItem('usersClickOnRadioBtn0',false)
    localStorage.setItem('usersClickOnRadioBtn1',true)
});

 let myRadioBtnValue0 = localStorage.getItem('usersClickOnRadioBtn0');
 let myRadioBtnValue1 = localStorage.getItem('usersClickOnRadioBtn1');
if(myRadioBtnValue0 =='true'){
    myRadio0.checked=true}else{myRadio1.checked=true}

console.log('____   ____ __   __check box');
myCheckbox0.addEventListener('change', e=>{
let myCheckBoxFromLS = localStorage.getItem('usersCheckBox');
if(myCheckbox0.checked ==true){
    localStorage.setItem('usersCheckBox',true);
   console.log(myCheckBoxFromLS);
    }else{
    localStorage.setItem('usersCheckBox',false);
    console.log(myCheckBoxFromLS);
         }
});
let myCheckBoxFromLS1 = localStorage.getItem('usersCheckBox');
function checkMyCheckBox (){
    if(myCheckBoxFromLS1 == 'true'){
        myCheckbox0.checked =true;
    }else{
        myCheckbox0.checked =false;}
}
checkMyCheckBox();

// 3  -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
console.log('<<<___________task_3______________');

let mySaveBTN = document.getElementById('btn_safeInfo');
let myBackBTN = document.getElementById('btn_back');
let myNextBTN = document.getElementById('btn_next');
let myInputText3 = document.getElementById('text3');
mySaveBTN.addEventListener('click',e=>{
    console.log(myInputText3.value);
    localStorage.setItem(localStorage.length+1,myInputText3.value);
})
myBackBTN.onclick = ()=>{
    myNextBTN.style.visibility = 'visible';
    let index;
    for (const key in localStorage) {
        if(localStorage.hasOwnProperty(key)){
            if(localStorage.getItem(key)===myInputText3.value){
                index=key;
            }
        }
    }
    if(index==='1'){
        myBackBTN.style.visibility = 'hidden';
        return;
    }
    myInputText3.value=localStorage.getItem(index-1);
}
myNextBTN.onclick = ()=>{
    myBackBTN.style.visibility = 'visible';
    let index;
    for (const key in localStorage) {
        if(localStorage.hasOwnProperty(key)){
            if(localStorage.getItem(key)===myInputText3.value){
                index=key;
            }
        }
    }
    if(index===localStorage.length.toString()){
        myNextBTN.style.visibility = 'hidden';
        return;
    }
    myInputText3.value=localStorage.getItem(+index+1);
}

// 4 - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактирования. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

console.log('<<<___________task_4______________');
const ARRAY_USER = 'ARRAY_USER';
let tempUser = {};
const form3 = document.forms.form3;
const content = document.getElementById('content');
form3.submit1.addEventListener('click', (ev) => {
    // ev.preventDefault();
    let person={...tempUser};
    tempUser={};
    for(let i=0; i < form3.children.length; i++) {
        const myElement = form3.children[i];
        if(myElement.name && myElement.type !== 'submit'){
            person[myElement.name] = myElement.value;
        }
    }
    if(!person.id){
    person.id = new Date().getTime()
    }
    console.log("person");
    console.log(person);
    saveUser(person);
});
function saveUser (user){
    if(localStorage.hasOwnProperty(ARRAY_USER)){
        const arrayUser = JSON.parse(localStorage.getItem(ARRAY_USER));
        const  find = arrayUser.find(value => value.id === user.id);
        if(find){
            const filter = arrayUser.filter(value => value.id !==user.id);
    filter.push(user);
    localStorage.setItem(ARRAY_USER,JSON.stringify(filter));

        }else{
            arrayUser.push(user);
            localStorage.setItem(ARRAY_USER, JSON.stringify(arrayUser));
        }
    }else {
        localStorage.setItem(ARRAY_USER,JSON.stringify([user]))
    }
}
function getInfoFromLocalS(){
    if(localStorage.hasOwnProperty(ARRAY_USER)){
    const myPersonArrFromLS = JSON.parse(localStorage.getItem(ARRAY_USER));
    for(const user of myPersonArrFromLS){
        content.appendChild(createPersonCard(user))
    }
}}
getInfoFromLocalS();

function createPersonCard(user){
    let myCardDiv = document.createElement('div')
    let flag = true;
    for(const key in user){
        if(flag){
        const h3 =document.createElement('h3');
        h3.innerText = key+" : "+user[key];
        myCardDiv.appendChild(h3);
            flag=false;
    }else{
        const p =document.createElement('p');
        p.innerText = key+" : "+user[key];
        myCardDiv.appendChild(p);
    }
}
    myCardDiv.style = "width:300px; border:red 1px solid; float:left";
    const btnDel =document.createElement('button')
    const btnEdit =document.createElement('button')
    btnDel.innerText='Del';
    btnEdit.innerText='Edit';
    btnDel.onclick = function (){
        delCard(user.id)
        console.log(user.id)
    }
    btnEdit.onclick = function (){
        editCard(user.id);
    console.log(user.id);
}
    myCardDiv.appendChild(btnDel);
    myCardDiv.appendChild(btnEdit);
    return myCardDiv;
}
function delCard(id){
    const arrPars =  JSON.parse(localStorage.getItem(ARRAY_USER));
    const fileterPars = arrPars.filter(user=>user.id !==id);
    localStorage.setItem(ARRAY_USER, JSON.stringify(fileterPars));
    location.reload();
}
function editCard(id){
    const arrParsEdit =  JSON.parse(localStorage.getItem(ARRAY_USER));
    const userParsEdit = arrParsEdit.find(user=>user.id ===id);
    for(let i=0; i < form3.children.length; i++) {
        const myElement = form3.children[i];
        if (myElement.name && myElement.type !== 'submit') {
            for (const key in userParsEdit){
                if (myElement.name === key) {
                    myElement.value = userParsEdit[key];
                }
            }
        }
    }
    tempUser=userParsEdit;
}