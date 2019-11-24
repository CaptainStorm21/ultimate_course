//create a function shoppinglist
function ShoppingList(){
  //this.groceries = ['pineapple'];
  this.groceries = [];
}
//if we want to create a public list object, 
//we create a prototype
ShoppingList.prototype.addItem = function (item){
  //refrence th earray above
  this.groceries = this.groceries.concat([item]);
  
}

var myList = new ShoppingList();
//the function shopping list as a constructor function
//inside of a constructor we have an array of groceries

//add a new item 
myList.addItem('banana');
myList.addItem('berry');

console.log(myList)
console.log(myList.groceries)


//to remove an item 
ShoppingList.prototype.removeItem = function (item){
  this.groceries = this.groceries.filter(function (grocery) {
    return item !== grocery;
    // banana !== banana
  })
};

myList.removeItem('banana');
console.log(myList.groceries);
