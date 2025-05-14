
let shoppingList = [];

document.addEventListener("DOMContentLoaded", function () {

    const addButton = document.getElementById("add_item_button");
    const removeButton = document.getElementById("remove_item_button");

    addButton.addEventListener("click", function () {

        const userInput = document.getElementById("add_item").value.trim().toLowerCase();

        if (userInput !== "") {

            addItem(userInput);
            renderList();

            document.getElementById("add_item").value = ""; // Clear input

        }
    });

    removeButton.addEventListener("click", function () {

        removeLastItem();
        renderList();

    });

});

function addItem(item) {

    if (!shoppingList.includes(item)) {

        shoppingList.push(item);

    } else {

        alert("Item already exists in the list.");

    }
}

function removeLastItem() {

    shoppingList.pop();

}

function renderList() {

    const listElement = document.getElementById("shopping_list_display");
    listElement.innerHTML = ""; // Clear list first

    shoppingList.forEach(item => {

        const li = document.createElement("li");
        li.textContent = item;
        li.className = "list-group-item";
        listElement.appendChild(li);

    });

}
