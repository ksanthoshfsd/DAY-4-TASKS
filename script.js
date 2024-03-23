// Define an array of objects representing books
let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
];

// Iterate through the array and log each book title
console.log("List of Books:");
books.forEach(book => {
    console.log(book.title);
});

// Add a new book to the array
let newBook = { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 };
books.push(newBook);

// Find and log books published after 1950
console.log("\nBooks published after 1950:");
let recentBooks = books.filter(book => book.year > 1950);
recentBooks.forEach(book => {
    console.log(`${book.title} (${book.year})`);
});

// Update the author of a book
let bookToUpdate = books.find(book => book.title === "1984");
if (bookToUpdate) {
    bookToUpdate.author = "George Orwell (pen name of Eric Arthur Blair)";
}

// Remove a book from the array
let bookToRemove = "Pride and Prejudice";
books = books.filter(book => book.title !== bookToRemove);

// Log the updated list of books
console.log("\nUpdated List of Books:");
books.forEach(book => {
    console.log(`${book.title} by ${book.author} (${book.year})`);
});
