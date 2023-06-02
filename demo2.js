//TRAVERSING THE DOM
var itemList = document.querySelector("#items");

// parentNode
// console.log(itemList);
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode.parentNode)

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement)

//childNodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = "yellow";

//firstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

//lastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

//createElement
//-------create a Helloworld before Item Lister-----//
//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = "Hello";
//add id
newDiv.id = "hello1";
//add attr
newDiv.setAttribute('title', 'Hello Div')
//create a TextNode
var newDivText = document.createTextNode('HELLO world');
//Add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
// console.log(newDiv);
newDiv.style.fontSize = "30px";
container.insertBefore(newDiv, h1);


//------create a Helloworld before item1------//
var newDiv2 = document.createElement('div');
newDiv2.className = "Hello2";
newDiv2.id = "hello2";
newDiv2.setAttribute('title', 'Hello-Div2')
var newDivText2 = document.createTextNode("HELLO world")
newDiv2.appendChild(newDivText2)
var ul = document.querySelector('list-group')
// console.log(newDiv2)
newDiv2.style.fontSize = "30px";
itemList.insertBefore(newDiv2, itemList.children[0])