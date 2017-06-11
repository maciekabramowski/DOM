'use strict';

var mainHeader = document.getElementById('main-header'); //Przypisujemy nagłówek strony do zmiennej

console.log(mainHeader);

mainHeader.innerHTML = "Treść nagłówka"; // Dodajemy treść do nagłówka

var link = document.getElementsByClassName('link')[0]; //przypisujemy pierwszy link do zmiennej

console.log(link);

link.href = "http://akademia108.pl"; // nadpisujemy atrybut href w linku

link.className = "nowa-klasa"; // nadpisujemy nazwę klasy w linku

mainHeader.style.color = "#11aa22"; //dodajemy style do nagłówka

