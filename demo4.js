var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    //Get 2nd input value
    var newItem1 = document.getElementById('description').value;

    if (newItem || newItem1) {
        // Create new li element
        var li = document.createElement('li');
        // Add class
        li.className = 'list-group-item';
        // Add text node with input value
        li.appendChild(document.createTextNode(newItem));
        li.appendChild(document.createTextNode(" " + newItem1));
    }
    else {
        alert("Enter the item and description :");
    }


    //--------------EDIT BUTTON-------------------//

    //create Edit button element
    var EditBtn = document.createElement('button');

    //Add class to edit button
    EditBtn.className = "btn btn-primary btn-sm float-right ml-2 ";

    //append text node
    EditBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(EditBtn);

    itemList.appendChild(li);


    //--------------EDIT BUTTON-------------------//

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function (item) {
        var itemName = item.childNodes[0].textContent;
        var description = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}