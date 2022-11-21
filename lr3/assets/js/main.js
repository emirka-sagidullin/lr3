// 1
let btn1 = document.getElementById('button1');
function scroll500(){
    window.onload(setTimeout(function(){window.scrollTo({top: 500})}, 3000));
};

// 2
let btn2 = document.getElementById('button2');
function scrollTrueFalse(){
    if(window.scrollHeight > window.clientHeight){  // проверка на наличие скролла
        alert('Прокрутки нет');
    }else{
        alert("Прокрутка есть");
    };
};

// 3
let btn3 = document.getElementById('button3');
let form = document.getElementById('form')
function sumOfInput(){
    s = Number(0) // создание счётчика
    for(elem of form){
        s += Number(elem.value); // изменение счётчика по нажатию
    };
    alert(s);
};

// 4
let country = document.getElementById('country');
let cities = document.getElementById('cities');
function city(){ 
    cities.style = `visibility: visible;`; // появление выбора городов
    if(country.value == 'russia'){  // проверка страны
        moscow = document.createElement('option'); // создание городов
        kazan = document.createElement('option');
        ufa = document.createElement('option');
        moscow.innerHTML = 'Москва'; // задаются названия городов
        kazan.innerHTML = 'Казань';
        ufa.innerHTML = 'Уфа';
        cities.appendChild(moscow); // добавление городов
        cities.appendChild(kazan);
        cities.appendChild(ufa);
    };
    if(country.value == 'usa'){ 
        newYork = document.createElement('option');
        LA = document.createElement('option');
        finiks = document.createElement('option');
        newYork.innerHTML = 'Нью-Йорк';
        LA.innerHTML = 'Лос-Анджелес';
        finiks.innerHTML = 'Финикс';
        cities.appendChild(newYork);
        cities.appendChild(LA);
        cities.appendChild(finiks);
    };
    if(country.value == 'germany'){ 
        berlin = document.createElement('option');
        gamburg = document.createElement('option');
        leycpig = document.createElement('option');
        berlin.innerHTML = 'Берлин';
        gamburg.innerHTML = 'Гамбург';
        leycpig.innerHTML = 'Лейцпиг';
        cities.appendChild(berlin);
        cities.appendChild(gamburg);
        cities.appendChild(leycpig);
    };
};

// 5
let ol5 = document.getElementById('ol5');
let li5 = document.createElement('li'); // создание лишки
li5.innerHTML = 'Пункт'; // добавление значения
ol5.appendChild(li5); // добавлние лишки в ol

// 6
let a = document.getElementsByTagName('a');
for(i = 0; i < a.length; i++){// добавление ссылки ко всем ссылкам
    a[i].addEventListener('mouseover', hreflook);
};
function hreflook(){ // добавление ссылки к ссылке
    this.innerHTML = this.innerHTML + `(${this.href})`;
};

// 7
function seven(elem){
    elem.innerHTML = Number(elem.innerHTML) * Number(elem.innerHTML); //вoзведение в квадрат
};

// 8
let clicker = document.getElementById('clicker');
function clickcounter(elem){
    elem.innerHTML = Number(elem.innerHTML) + 1; //счётчик нажатий
};

// 9
let ul8 = document.getElementById('ul8');
function newLi(){ // создание новых пунктов
    li = document.createElement('li');
    li.innerHTML = 'Пункт';
    ul8.appendChild(li);
};
function appendChar(){ //добавление !
    li = event.target.closest('li'); // прикрепление события к лишкам
    li.innerHTML = li.innerHTML + '!'; // добавление знака !
}; 

// 10
let table10 = document.getElementById('table10');
function newUser(){ // создание новых пользователей
    nameUser = prompt("Введите имя");
    surnameUser = prompt("Введите фамилию");

    tr = document.createElement('tr');

    thname = document.createElement('th');
    thsurname = document.createElement('th');

    thname.innerHTML = nameUser;
    thsurname.innerHTML = surnameUser;

    tr.appendChild(thname)
    tr.appendChild(thsurname)

    table10.appendChild(tr);
};
function changeNameSurname(){ // изменение данных пользователей
    th = event.target.closest('th');
    th.innerHTML = prompt('Введите новое значение');
};