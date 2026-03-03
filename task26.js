let products = [
    {name: "Laptop", price: 1000},
    {name: "Phone", price: 500},
    {name: "Tablet", price: 300},
    {name: "Monitor", price: 200},
    {name: "Keyboard", price: 50},
    {name: "Mouse", price: 30},
    {name: "Headphones", price: 150},
    {name: "Speaker", price: 100},
    {name: "Webcam", price: 80},
    {name: "Printer", price: 120}
];
let totalPrice = 0;
for(let i = 0; i < products.length; i++){
    totalPrice += products[i].price;
}
console.log(totalPrice);