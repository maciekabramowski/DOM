'use strict';

var existingNode = document.getElementById('parFirst').children[3]; //przypisz do zmiennej istniejący węzeł

console.log(existingNode);

var newElement = document.createElement('p'); // stwórz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stwórz tekst dla elementu p

newElement.appendChild(newElementContent); //dodaj tekst do elementu p

existingNode.appendChild(newElement); 

existingNode.removeChild(newElement);