const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 2000);

    } else {

        const li = document.createElement('li');
        
        var string = li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} `));




        //------ Two input Values stores in Local-Storage---- 
        // localStorage.setItem(nameInput.value, emailInput.value);


        //--------Stores in Object-------
        // let myObj = {name : nameInput.value , email : emailInput.value };
        // let myObj_seralized = JSON.stringify(myObj);
        // localStorage.setItem("myObj", myObj_seralized)
        // let myObj_deseralized = JSON.parse(localStorage.getItem("myObj"))
        // console.log(myObj_deseralized)

        //--------Stores in Object without Overwriting---------
        var addToLocalStorageObject = function (name, key, value) {

            // Get the existing data
            var existing = localStorage.getItem(name);

            // If no existing data, create an array
            // Otherwise, convert the localStorage string to an array
            existing = existing ? JSON.parse(existing) : {};

            // Add new data to localStorage Array
            existing[key] = value;

            // Save back to localStorage
            localStorage.setItem(name, JSON.stringify(existing));

        };
        let name = nameInput.value;
        let key = nameInput.value;
        let value = emailInput.value;
        addToLocalStorageObject(name, key, value);


        // var removeItem = function (key){

        //     var existing = localStorage.getItem(name);
        //     existing = existing ? JSON.parse(existing) : {};
        //     delete existing[key]
        //     localStorage.setItem(name, JSON.stringify(existing));
        // }
        // removeItem(nameInput.value)

        var delbutton = document.createElement('button');
        delbutton.appendChild(document.createTextNode('Delete'));
        delbutton.className = 'list-item';
        li.appendChild(delbutton);
            
        var editButton = document.createElement('button');
        editButton.appendChild(document.createTextNode('Edit'));
        editButton.className = 'list-edit-item';
        li.appendChild(editButton);


        userList.addEventListener('click', removeItem);
        userList.addEventListener('click', removeItem1);
        

        userList.appendChild(li);

    }
    function removeItem(e) {
        if (e.target.classList.contains('list-item')) {
            var li = e.target.parentElement;
            userList.removeChild(li);
            localStorage.clear();

        }
    }
    function removeItem1(e){
        if(e.target.classList.contains('list-edit-item')){
            let nameInput = document.getElementById('name');
            var li = e.target.parentElement;
            console.log(delbutton.parentElement)
            userList.removeChild(li);
            localStorage.clear();

        }
    }

}