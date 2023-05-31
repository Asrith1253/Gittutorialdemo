// console.log("I love Git");

//----- DOM MANUPLATIONS -------

// console.log(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.body)
// console.log(document.head)
//console.log(document.all)
// console.log(document.all[10])
// document.all[10].textContent = "Hello"
// console.log(document.forms[0])
// console.log(document.links)
 // console.log(document.images)


//GETELEMENTBYID
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerHTML = "<a href='#'>hellooo</a>";
headerTitle.style.border = 'solid 3px #000';
header.style.border = 'solid 4px #000';


//GETELEMENTBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = "Hello 2";
items[1].style.fontWeight = "bold";
items[1].style.color = "green"
items[1].style.backgroundColor = "yellow"

// for(var i=0; i<items.length; i++){
    //     items[i].style.backgroundColor = "#f4f4f4"
    // }

    //ADD ITEM BOLD AND GREEN
var additem = document.getElementsByClassName("title")
console.log(additem)
additem[0].style.fontWeight = "bold";
additem[0].style.color = "green";