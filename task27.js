let books = [
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", available: true},
    {title: "To Kill a Mockingbird", author: "Harper Lee", available: false},
    {title: "1984", author: "George Orwell", available: true},
    {title: "Pride and Prejudice", author: "Jane Austen", available: true},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", available: false}
];
let availableBooks = books.filter(book => {
    if(book.available){
        return true;
    }
});
console.log(availableBooks);