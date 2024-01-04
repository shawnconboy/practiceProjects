let addButton = document.getElementById('addItemBtn');
let listDiv = document.getElementById('listDiv');
let unorderedList = document.getElementById('list');
let userInput = document.getElementById('userInput');

function deleteItem(event) {
    let clickedElement = event.target;

    // Check if the clicked element has the class 'deleteBtn'
    if (clickedElement.classList.contains('deleteBtn')) {
        // Find the corresponding list item and remove it
        let listItem = clickedElement.closest('li');
        listItem.remove();
    }
}

function addItem() {
    addButton.addEventListener('click', function () {
        let newItem = document.createElement('li');
        newItem.className = 'listItem';
        newItem.textContent = userInput.value;

        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = '&times;';

        newItem.appendChild(deleteBtn);
        unorderedList.appendChild(newItem);

        userInput.value = ''; // Clear the input field after adding an item
    });

    userInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
}

// Add a single click event listener to the parent element
listDiv.addEventListener('click', deleteItem);

addItem();
