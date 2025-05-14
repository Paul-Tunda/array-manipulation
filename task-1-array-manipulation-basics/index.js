
let shoppingList = []; // declaring the array globally

startProgram();

function startProgram(){



}


function addItem (item){

    shoppingList.push(item);

}


function removeLastItem (){

    shoppingList.pop();

}


function displayList (){

    console.log(shoppingList);

}