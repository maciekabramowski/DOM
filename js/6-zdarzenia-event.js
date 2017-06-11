'use strict';

//var secondLink = document.getElementsByTagName('a')[1]; //towrzymy zmienna z drugim linkiem
//
//console.log(secondLink);
//
//function alarm(event) {
//    event.preventDefault(); //zapobiegamy domyślnej akcji 
//    console.log('kliknięto kolejny link');
//    
//    console.log(event);
//}
////
////secondLink.onclick = alarm; //wywołujemy funkcję alarm() na drugim linku po kliknięciu
//
//var thirdLink = document.getElementsByTagName('a')[2]; //tworzymy zmienna z trzecim linkiem
//
//thirdLink.addEventListener('click', alarm); //wywolujemy funkcję alarm() na trzcim linku po klikniecuy za pomoca event listenera
//
//thirdLink.removeEventListener('click', alarm);











//var mainHeader = document.getElementById('main-header'); //przypisujemy agłówek do zmiennej
//
//function resize(e) { //przekazujemy zdarzenia jako parametr funkcji
////    console.log(e.type);
//    if (e.type == 'mouseover') { //sprawdzanie typu zdarzenia
//        mainHeader.style.fontSize = "70px"; //zmień wielkość fonta po najechaniu
//    } else {
//    mainHeader.style.fontSize = "inherit"; //przywróć domyślną wartość po zjechaniu
//}
//}
//
//mainHeader.onmouseover = resize;
//mainHeader.onmouseout = resize;












function clickHeader (){
    console.log("Daj mi spokój!");
}

document.getElementsByTagName('header')[0].onclick = clickHeader;

function clickH1(e){
    e.stopPropagation();
    console.log("Kurwa!");
}

document.getElementsByTagName('h1')[0].onclick = clickH1;
