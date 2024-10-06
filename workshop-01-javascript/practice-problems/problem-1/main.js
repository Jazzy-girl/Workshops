// Fill in for exercises!
/*
## Instructions
Refer to the [JavaScript Cheat Sheet](../../cheatSheet.js) for reminders on certain concepts.

1. Declare a variable shoppingList and initialize it as an empty array.
2. Write a function addItem(item) that takes a string (item) and adds it to the shoppingList array.
3. Write a function removeItem(item) that removes the given item from the shoppingList (if it exists).
4. Write a function printList() that prints out each item in the shopping list using a loop. 
If the list is empty, print "Your shopping list is empty!".
Bonus: Use conditional statements inside addItem and removeItem to prevent 
duplicate items and handle cases where an item doesn’t exist in the list.
Bonus: Refactor the functions to use arrow functions.
*/

let shoppingList = []

function addItem(item){
    shoppingList.push(item)
}

function removeItem(item){
    shoppingList.pop(item)
}

function printList(){
    if (shoppingList[0] == ""){
        console.log('Your shopping list is empty!')
    }
    for (let i = 0; i < shoppingList.length; i++){
        console.log(shoppingList[i])
    }
}