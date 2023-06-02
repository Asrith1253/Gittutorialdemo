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
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        //------ Two input Values stores in Local-Storage---- 
        localStorage.setItem(nameInput.value, emailInput.value)

        //--------Stores in Object-------
        let myObj = {name : nameInput.value , email : emailInput.value };
        let myObj_seralized = JSON.stringify(myObj);
        localStorage.setItem("myObj", myObj_seralized)
        let myObj_deseralized = JSON.parse(localStorage.getItem("myObj"))
        console.log(myObj_deseralized)

        userList.appendChild(li);

        nameInput.value = "";
        emailInput.value = "";



    }

}