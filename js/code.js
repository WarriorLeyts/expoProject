/*//Вывести любой текст с помощью alert() 
alert("Привет, мир. Че там?");
//Вывести что-нибудь в консоль
console.log('//Вывести что-нибудь в консоль')
//Создать две переменные с правильным именем
let currentUserName = 'Мухаммад';
let age = '26';

//и две переменные с неправильным.
/* 
let current-User-Name= 'Мухаммад';
let 1age= '26';

//Какой тип данных нужно использовать, чтобы задать дату формата 28.02.1999?
let date1 = new Date(1999,1,28);
console.log(date1);
//Какой тип данных нужен для сохранения числа ПИ 3.14?
let p = 3.14;
console.log(p);
//Создать константу с любым значением и попытаться изменить это значение. Выяснить что в итоге получится.
const version = 1.5;
// version = 3;   Не получается изменить значение так как константа не меняется.
console.log(version);
/*Создать переменные name, address, phone в которых с помощью prompt() будет храниться значения имени, адреса и 
номер телефона. Вывести в консоль текст “Студент . Адрес: , Номер телефона: ___” 
где вместо пропусков будут соответствующие переменные.
let name = prompt('Введите выше имя и фамилию');
let address = prompt('Введите свой адрес проживания');
let phone = prompt('Введите номер телефона');
console.log(`Студент ${name}, Адрес: ${address}, Номер телефона: ${phone}`);
/*Создать программу, в которой две переменные - курс рубля к доллару и количество доступных рублей.
Вывести в консоль сколько долларов можно купить на доступные рубли.
let courseToDollar = 58.45;
let summToTranslate = 500;
let dollar = Math.trunc(summToTranslate/courseToDollar);
console.log (dollar + ' долларов');
//Запустив следующий код, вы получите число 16. Измените вторую строку так, чтобы получить число 15.
let a = 5, b = 10, c;
c = ++a + --b;
 console.log(c);
 console.log('start')
 if (true) {
  console.log('code')
 }
 console.log('end')
 let a = 3;
 let b = 5;
  
 if (a > b){
  console.log('code');
 } else if (a < b){
  console.log('code else');
 } else {
  console.log('else');
 }
 let nameDate = 'Ali';
 let passwordDate = '1234';
 let name = prompt('login?');
 let password = prompt('password');
 
 if (nameDate === name){
  if(passwordDate === password){
  console.log('Welcome');
  } else {
    console.log('password error');
  } 
 } else {
  console.log('error login');
 }
 if (nameDate === name && passwordDate === password){
  console.log('Welcome')
  } 
  else {
  console.log('error login');
 }

 let aa = 2;
 let bb = 3;
 let result = aa > 1? 'aa':'bb'
 console.log(result);
 let code = 'js'
 switch(code){
   case ('html'):
   console.log('html');
   break;
   case ('css'):
   console.log('css');
   break;
   case ('js'):
   console.log('js');
   break;
  case ('react'):
   console.log('react');
   break;
   default:
    console.log('default');
 }
 /*1. Создать константу с любым числовым значением. 
 Если значение константы меньше 10, то вывести в консоль текст “константа меньше 10”, 
 иначе вывести “константа не меньше 10”
 const toTen = 20;
  if (toTen < 10){
  console.log('константа меньше 10')
 } else {
  console.log('константа не меньше 10')
 }*/



 // УРОК 16
 /* 1 - Задание 

 /*
 Создать функцию передать  любое число.
  Если значение константы меньше 10, то вывести в консоль текст “константа меньше 10”, 
  иначе вывести “константа не меньше 10”
  function toTen(random){
    if (random < 10) {
      return console.log('константа меньше 10');
    } else if (random > 10) {
      return console.log('константа не меньше 10');
    }
  }
  toTen(50);
  /* 2 - Задание 
  Создать и вызвать функцию, которая выводит алерт с текстом “Привет, Мир”.
  function helloWorld(){
    alert('Привет, Мир');
  }
  helloWorld()
 /* 3 - Задание  
 Создать функцию, которая выводит в консоль текст “JavaScript” 
 function java(){
  console.log('JavaScript')
 }
 java();
 /*4 - Задание 
 Создать переменную text c любым текстовым значением. 
 Написать функцию, которая если внутри переменной text находится слово “lorem” выведет в консоль “У вас ошибка в тексте”, 
 иначе выведет в консоль “Содержимое переменной: ***” - где вместо звездочек должно быть содержимое переменной. 
 let text = 'Я хороший программист, надеюсь.'

 function lorem(){
  if (text === 'lorem') {
    return console.log('У вас ошибка в тексте');
  } else {
    return console.log(`Содержимое переменной: ${text}`)
  }
 }
 lorem();

 /* ДОП 
 1 - Задание
 Вам даны две переменные x и y, менять их не нужно. При помощи тернарного оператора сравните их и если x больше, чем y, 
 то выведите фразу: "x больше, чем y", иначе выведите фразу: "x не больше, чем y".
let x = 10, y = 7; 

let x = 10;
let y = 7;
let result = x > y ? 'x больше, чем y':'x не больше, чем y';
console.log(result);
/* 2 - Задание
Пользователь вводит какое-то число (num). Используя конструкцию if..else, напишите код, который делает запрос: «Введите число».
Если посетитель вводит четное число, то выводить «Число ${ num} четное», если нечетное: Число ${num} нечетное.

let num = prompt('Введите число')
if ( (num % 2) == 0) {
  console.log (`Число ${num} четное`);
} else {
  console.log (`Число ${num} нечетное`);
}
/* 3 - Задание
Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.
Пользователь вводит поочерёдно через prompt числа. Используя конструкцию if..else, напишите код, который должен определять, 
какое из введенных чисел является наибольшим.
let a = Number(prompt('Первое число'));
let b = Number(prompt('Второе число'));
let c = Number(prompt('Третье число'))

if (a > b && a > c ) {
  console.log(a);
} else if (b > a && b > c){
    console.log(b);
  } else if (c > a && c > b){
    console.log(c);
  }*/
 
// УРОК 18
/*Дз: 
- Создать объект man с информацией о человеке (имя, фамилия, возраст, рост, логин, пароль, сумма денег на счете)
- После создания отдельно добавить свойство с информацией об адресе.
- Создать переменную и присвоить ей любое текстовое значение. 
Написать условие, по которому проверяется соответствует ли значение этой переменной паролю человека. 
Если соответствует, то вывести в консоль “Добро пожаловать, [имя фамилия].  Ваш логин[логин]". 
Иначе вывести "Указанный пароль [пароль из переменной] не верен. Попробуйте еще раз". 

const man ={
  name: 'Рустам',
  family: 'Алероев',
  age: 29,
  height: 170,
  login: 'Aleroev93',
  password: 'rustam1993',
  'money in the account': 50000,
} 
 man.adress = 'г. Грозный ул. Мира 45';
 console.log(man);
 let userPassword = 'rustam1993'
 if (userPassword == man.password){
  console.log(`Добро пожаловать, ${man.name} ${man.family}.  Ваш логин ${man.login}, деньги на счете ${man['money in the account']} руб.`)
 } else{
  console.log(`Указанный пароль ${userPassword} не верен. Попробуйте еще раз.`)
 }

 for (const key in man){
  console.log(key);
  console.log(man[key]);
 }
 // форма регистрации от себя 
/*
 let name = prompt('Введите ваше имя: ');
 let family = prompt('Введите ваше фамилие: ');
 let age = prompt('Сколько вам лет: ');
 let height = prompt('Ваш рост: ');
 let login = prompt('Придумайте логин: ');
 let password = prompt('Придумайте пароль: ');
 let money = prompt('Какую сумму вы хотите занести: ');
 
 let user = {
   name,
   family,
   age,
   height,
   login,
   password,
   'money in the account': money,
 }
 let userAdd = prompt('Какую информацию вы хотите еще добавить');
  
 user[userAdd] = prompt(`Пишите ${userAdd}`);
console.log(user)*/

/*1) Дан массив let a = ['lorem', 123, true, 'ipsum'];
 Вывести длинну массива.
 let a = ['lorem', 123, true, 'ipsum'];
 console.log(a.length);
 /*
  2) Для того же массива выведите первый элемент и последний элемент 
  (с учетом того, что количество элементов может меняться, а ваш код должен всегда работать)
 console.log(`Первый элемент ${a[0]}, Последний элемент ${a[a.length-1]}`);
 /*
 3) Дан пусто массив let em = []; Заполните его 5-ю различными элементами. Используйте методы для работы с массивами
 let em = [];
 em.push(true); 
 em.unshift(251);
 em.push('Имя');
 em.unshift(100);
 em.push('Солнце');
 //4) Добавьте в начало предыдущего массива 3 новых элемента
 em.unshift('первый','второй','третий');
 //5) Удалите один элемент с начала массива и два элемента с конца
em.splice(0,1);
em.splice(-2);
console.log(em);
//6) Дан массив с нечетными числами let number = [1, 3, 5, 7, 9]. Выведите консоль все элементы сделав их четными

let number = [1, 3, 5, 7, 9];

number.forEach(function(item, index, array) {
  return array[index] = item + 1;
});
console.log(number);
//7) Удалите элементы из массива по середине. Замените элементы массива

number.splice(1,3, 'Замена чисел', true , undefined);
console.log(number);*/

  // УРОК 20 
/*Дз:
  forEach
   Дан массив с числами [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]. Вывести в консоль только нечетные числа.
    (Для этого вам необходимо использовать if и узнать оператор про оператор ‘остаток от деления’ - % 

   let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
   
   arr.forEach((item, key)=> {
   if (item % 2 != 0){
    console.log(item);
   }
   })

/* Дан массив со строчными элементами [ “lorem ipsum”, “javascript”, “php”, “css”, “react”, “git”, “html”, “mysql”]. 
Вывести в консоль элементы у которых кол-во символов не больше 4-х.
let arr2 = ['lorem ipsum','javascript','php', 'css', 'react', 'git', 'html','mysql'];

let arr3 = arr2.filter((item,key) =>{
return item.length <= 4;
})
console.log(arr3);
/*filter
   1.  Дан массив [1, -3, 5, 6, -7, 8, 9, -11]. Создайте новый массив в котором останутся только отрицательные элементы. 

  let number = [1, -3, 5, 6, -7, 8, 9, -11];
  let negative = number.filter((item, key) =>{
    return item < 0;
  })
console.log(negative);
/* 2.  Дан массив [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]. 
Создать новый в котором будут только четные элементы этого массива. (Нужен оператор остаток от деления - %).
 number = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];

 honest = number.filter((item, key) => {
  return (item % 2) == 0;
 })
console.log(honest);
/*    3. Дан массив [ “lorem ipsum”, “javascript”, “php”, “css”, “react”, “git”, “html”, “mysql”] 
создать новый массив состоящий только из элементов у которых длина строки не равна 3-м. 
 let arr4 = arr2.filter((item, key) =>{
  return item.length != 3;
 })
 console.log(arr4);
/* Map
  Дан массив [5, 6, 7, 8, 9], сделайте из него массив состоящий из квадратов этих числе. (25, 36.. и тд)
let arr5 = [5, 6, 7, 8, 9];
let arr6 = arr5.map((item, key) => {
  return item*item;
})
console.log(arr6);
/* Дан массив с объектами [{а: 10, b: 5}, {а: 20, b: 22}, {a: 131, b:55}].
 Создать новый массив элементами которого буду сумма свойств объекта. Должно получится [15, 42, 186]
 let mas = [{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}];
 let sum_mas = [];
 sum_mas = mas.map((item, key) =>{
  return item.a + item.b;
 })
console.log(sum_mas);
/*  Дан массив [-13, 0, 12, 1662, -0.32, -102, -2]. Посчитать сумму отрицательных элементов. 
(Нужно будет использовать filter и reduce)
number = [-13, 0, 12, 1662, -0.32, -102, -2];

let number_filt = (number.filter((item, key) => {
  return item < 0
}))
let number_result = number_filt.reduce((sum, item, key, arr) => {
  return sum + item;
},0)
console.log(number_result);
 /*   Да массив с объектами [ {x: 10, y: “lorem”}, {x: 21, y: “lorem”}, {x: -17, y: “lorem”}, {x: 156, y: “lorem”}]; 
 посчитать сумму свойств х всех объектов. 
 number = [ {x: 10, y: 'lorem'}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}];

 let result = number.reduce((sum, item, key) => {
  return sum + item.x;
 },0)
console.log(result);*/

// УРОК 22
/* 1. Даны массив arr_1= [101, 202, 303, 404, 505] и 
arr_2 = [606, 707, 808, 909] - создайте третий массив superArr который будет результатом "слияния" предыдущих двух.  
Результатом должен быть массив superArr = [101, 202, 303, 404, 505, 606, 707, 808, 909] */
let arr_1= [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];

let superArr=[...arr_1,...arr_2];
console.log(superArr);
/*2 Метод Math.min() может принимать в параметры неограниченное кол-во чисел и возвращает наименьшее из них. Например:

Math.min(102, 1231, 29922, 1); // вернет 1

Передайте в этот метод элементы массива superArr (не сам массив, а его элементы)
Для этого вам надо раскрыть массив. */
console.log(Math.min(...superArr));
/*3 Дан объект obj со свойствами width: 300 и heigth: 550 . Создайте новый объект, который будет копией obj , 
но будет иметь еще и метод area() , который должен вернуть произведение свойств width и height ;*/
let obj = {width: 300, heigth: 550};

let obj_copy = {...obj};
obj_copy.area = () =>{
 return obj_copy.width * obj_copy.heigth;
}
console.log(obj_copy.area());
//4 Создайте функцию которая принимает произвольное количество параметров и возвращает их сумму. 
sumRand = (...mas) =>{
return mas.reduce((sum,item) => {
  return sum + item
},0)
}
console.log(sumRand(25,48,1,));
/*5. Переписать на цикл while

for (let num = @; num < 3; num++) {
console.log("4ucno: ${num}°);
}*/
let num = 0;
while (num < 3){
  console.log(`Чucлo: ${num}`);
  num++
}
//6. Вывести в консоль числа от 1 до 10 с помощью цикла
for(let i = 1;i < 11; i++){
  console.log(i);
}















 


