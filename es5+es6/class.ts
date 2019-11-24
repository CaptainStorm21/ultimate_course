class ShoppingList {
  //add a property
  groceries: string [];
  constructor() {
    this.groceries = [];
  }
  addItem(item){
    this.groceries = [...this.groceries, item];
    
  }
  removeItem(item){
    this.groceries = this.groceries.filter((grocery) => item !== grocery);
  }
}

const myNewList = new ShoppingList();

myNewList.addItem('Pear')
myNewList.addItem('Apple')

console.log(myNewList.groceries)

myNewList.removeItem('Apple')
console.log(myNewList.groceries)

/*
function in a shopping list acts as a constructorfunction
if we want to add internal properties we can create this.grocieries
*/
