
let shoppingList = []; // declaring the array globally

startProgram();

function startProgram(){



}


function addItem (item){

    // only add items that are not already included
    if(!shoppingList.includes(item)){
        shoppingList.push(item);
    }

}


function removeLastItem (){

    shoppingList.pop();

}


function displayList (){

    console.log(shoppingList);

}