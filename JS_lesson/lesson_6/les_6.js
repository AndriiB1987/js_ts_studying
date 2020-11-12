// 1 - создать массив с 20 числами.
// -- при помощи метода sort и колбека  отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
console.log('sort________________task#1____________________');
const arrayOfTwenty = [234,223,67,34,64,34,62,2,366,73,46,700,342,36,100,232,35,3,651,24];
let mySort = arrayOfTwenty.sort((a,b)=>{
  // console.log(a);
  // console.log(b);
  // console.log('___________');
    return b-a;
});
console.log(mySort);
// 2-- при помощи filter получить числа кратные 3
console.log('filter________________task#2____________________');
let getByFilter = JSON.stringify(arrayOfTwenty);
let filter0 = JSON.parse(getByFilter);
//filter0.filter(value=>value%2);
let filter0Show = filter0.filter((value)=>{
    if(value %3===0)
    return value;
});
console.log(filter0Show);
// 3-- при помощи filter получить числа кратные 10
console.log('filter________________task#3____________________');
let getByFilter1 = JSON.stringify(arrayOfTwenty);
let filter1 = JSON.parse(getByFilter1);
let filter1Show = filter1.filter(value=>value%10==0);
console.log(filter1Show);
// 4-- перебрать (проитерировать) массив при помощи foreach()
console.log('forEach______________task#4____________________');
let getByForEach = JSON.stringify(arrayOfTwenty);
let myForEach = JSON.parse(getByForEach);
myForEach.forEach((value,index)=>{
    console.log(value,index);
})
// 5-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
console.log('map_______________task#5____________________');
let getByMap = JSON.stringify(arrayOfTwenty);
let myMap = JSON.parse(getByMap);
let mapShow =myMap.map((value)=>{
    value+=3;
    //console.log(value,index);
   return value; 
})
console.log(mapShow);
// 6- создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
console.log('____________________task#6____________________');
let arrayOfStrigs = ['vasya','vasya','kolya','olya','tolia','andrii','vitalii','anna','sergii','max','gora','inna','innesa','ira','nadia'];
let sortFromGetGo = JSON.stringify(arrayOfStrigs);
let sort0 = JSON.parse(sortFromGetGo);
let finalSort0 = sort0.sort((a,b)=>{
    if(a>b){
        return 1;
    }
    return -1;
});
console.log(finalSort0);
//---------------------------------------------------------------
let sortFromTheEnd = JSON.stringify(arrayOfStrigs);
let sort1 = JSON.parse(sortFromTheEnd);
let finalSort1 = sort1.sort((a,b)=>{
    if(a>b){
        return -1;
    }
    return 1;
});
console.log(finalSort1);
// 7 -- отфильтровать слова длиной менее 4х символов
console.log('filter by length_______________task#7____________________');
//let arrayOfStrigs = ['vasya','vasya','kolya','olya','tolia','andrii','vitalii','anna','sergii','max','gora','inna','innesa','ira','nadia'];
let filterLes4symbols = JSON.stringify(arrayOfStrigs);
let filter4 = JSON.parse(filterLes4symbols);
let fil4Show = filter4.filter(value => value.length <4);
console.log(fil4Show);
// 8 -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
console.log('added sighn "!"____________________task#8____________________');
let getByMap1 = JSON.stringify(arrayOfStrigs);
let myMap1 = JSON.parse(getByMap1);
let mapShow1 =myMap1.map(value=>{
    value+='!';
    //console.log(value,index);
   return value;
});
console.log(mapShow1);
// 9 - Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
console.log('sort age_______________task#9____________________');
let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
let clonedIncreasing = JSON.stringify(users);
let clonedUsersI = JSON.parse(clonedIncreasing);
let sortByAgeI = clonedUsersI.sort((a,b)=>{
    return a.age-b.age;
});
console.log(sortByAgeI);
///--------------------------------------------
let clonedDecreasing = JSON.stringify(users);
let clonedUsersD = JSON.parse(clonedDecreasing);
let sortByAgD = clonedUsersD.sort((a,b)=>{
    return b.age-a.age;
});
console.log(sortByAgD);
console.log(users);
// 10 - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
console.log('sort name_______________task#10____________________');
let clonedIncreasingName = JSON.stringify(users);
let clonedUsersIName = JSON.parse(clonedIncreasingName);
let sortByIName = clonedUsersIName.sort((a,b)=>{
    return b.name.length- a.name.length});
    console.log(sortByIName);
 //   console.log(___________________________________________);
    let clonedDecreasingName = JSON.stringify(users);
    let clonedUsersDName = JSON.parse(clonedDecreasingName);
    let sortByDName = clonedUsersDName.sort((a,b)=>{
        return a.name.length-b.name.length});
        console.log(sortByDName);
// 11 - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
console.log('add user_id__________________task#11____________________');
let arrForNewId = JSON.stringify(users);
let myArrForNewId = JSON.parse(arrForNewId);
myArrForNewId.forEach((value,index)=>{
    value.user_id = index+1;
    return value;
});
console.log(myArrForNewId);
// 12 - відсортувати його за індентифікатором
console.log('sort by user_id________________task#12____________________');
myArrForNewId.sort((a,b)=>{
    return b.user_id-a.user_id;
});
console.log(myArrForNewId);
