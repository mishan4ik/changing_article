var btn = document.getElementById("btn1");
var btn1 = document.getElementById("btn2");
var btn2 = document.getElementById("btn3");
var text = document.getElementById("text1");
var text1 = document.getElementById("text2");
var text2 = document.getElementById("text3");
btn.addEventListener("click",item1);
btn1.addEventListener("click",item2);
btn2.addEventListener("click",item3);

let p = document.createElement("p");
			p.innerHTML = "Ламборджини Авентадор - суперкар, выпускавшийся компанией"+ 
			"Lamborghini с 2011 по 2021 год. Aventador пришёл на смену Lamborghini "+
			"Murciélago и оснащался 6,5-литровым V-образным 12-цилиндровым двигателем "+
			"мощностью от 700 до 780 л.с. в зависимости от модификации. Дизайн "+
			"был разработан"+
			" Фелиппо Перини.Первоначально компания планировала выпустить лишь 4 тысячи "+
			"экземпляров этой модели, но её итоговый тираж превысил это число более "+
			"чем вдвое — 10 тысяч машин, что сделало Авентадор самой успешной моделью "+
			"в истории марки.";
			text.appendChild(p);
let p1 = document.createElement("p");
			p1.innerHTML = "Ламборджини Хуракан - спортивный автомобиль производства"+ 
			"итальянской компании Lamborghini, который заменил Lamborghini Gallardo."+ 
			"Дебютировал на Женевском автосалоне в марте 2014 года. 2‑дв. купе (2‑мест.)";
			text1.appendChild(p1);
let p2 = document.createElement("p");
			p2.innerHTML = "Ламборджини Диабло - суперкар, выпускавшийся итальянской"+ 
			"компанией Lamborghini в период с 1990 года по 2001 год. Официальная" +
			"презентация автомобиля состоялась 21 января 1990 года в городе Монте-Карло."+
			"Название Diablo, означающее Дьявол в переводе с испанского языка, принадлежало"+
			" свирепому быку герцога Верагуа. Бык был убит во время корриды в Мадриде в 1869"+ 
			"году.";
			text2.appendChild(p2);

function item1(){

	if (text.style.display=="none") {

			text.style.display="block";
			

			text2.style.display="none";
			text1.style.display="";
	}
	

}
function item2(){

	if (text1.style.display=="") {

			text1.style.display="block";
			
			text.style.display="none";
			text2.style.display="";
	}

	
	

}
function item3(){

	if (text2.style.display=="") {

			text2.style.display="block";
			text1.style.display="none";
			text1.style.display="";
			
	}

}