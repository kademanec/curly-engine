// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.splice(0,0,"Meat"); // adds the Meat at 0th index of the array

console.log(shoppingCart); 

shoppingCart.splice(shoppingCart.length,0,"Sugar"); // adds the sugar at the end of the array.

console.log(shoppingCart); 

shoppingCart.splice(4,1)

console.log(shoppingCart);

shoppingCart.splice(3,1,"Green Tea");

console.log(shoppingCart);