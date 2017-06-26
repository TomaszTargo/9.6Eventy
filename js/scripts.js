function checkOnclickEvent(param) {
  console.log(param);
}

var inputElem = document.getElementById('addElem');
var listElem = document.getElementById('listposition');
console.log(listElem.innerText);

addElem.addEventListener('click', function(element) {
	var element = document.createElement('li');
	//element.innerHTML = 'item';
	var iloscElementow = document.getElementsByTagName('li').length;
	list.appendChild(element);
	element.innerHTML = 'item ' + iloscElementow;
	console.log(listElem.innerText);

});
