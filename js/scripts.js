function checkOnclickEvent(param) {
  console.log(param);
}

var inputElem = document.getElementById('addElem');
var listElem = document.getElementById('listposition');
console.log(listElem.innerText);

addElem.addEventListener('click', function(element) {
	var element = document.createElement('li');
	element.innerHTML = 'item';
	var iloscElementow = document.getElementsByTagName('ul').length;
	list.appendChild(element);
	console.log(iloscElementow);
	console.log(listElem.innerText);

});
