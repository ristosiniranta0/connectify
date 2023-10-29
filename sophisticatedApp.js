/**
 * filename: sophisticatedApp.js
 * 
 * This code represents a sophisticated and elaborate JavaScript application that manages a library of books.
 * It includes features for adding, removing, and searching for books, as well as tracking their availability.
 * The code is designed to be modular, following best practices and adhering to a clean code architecture.
 * The application utilizes various JavaScript concepts and techniques such as objects, arrays, functions, and more.
 *  
 * Feel free to explore and execute this code to see the functionality of this sophisticated library management system.
 */

// Book class
class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }
}

// Library class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  searchBooks(query) {
    return this.books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
  }

  displayBooks() {
    this.books.forEach((book, index) => {
      console.log(`Book ${index + 1}: ${book.title} - ${book.author}`);
    });
  }
}

// Create a library instance
const myLibrary = new Library();

// Add books to the library
myLibrary.addBook(new Book("The Catcher in the Rye", "J.D. Salinger", 234));
myLibrary.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 320));
myLibrary.addBook(new Book("Pride and Prejudice", "Jane Austen", 432));
myLibrary.addBook(new Book("1984", "George Orwell", 328));

// Display all books in the library
console.log("All Books in Library:");
myLibrary.displayBooks();

// Search books by title or author
const searchQuery = "kill";
const searchResults = myLibrary.searchBooks(searchQuery);

console.log(`\nSearch results for "${searchQuery}":`);
searchResults.forEach((book, index) => {
  console.log(`Book ${index + 1}: ${book.title} - ${book.author}`);
});

// Remove a book from the library
const bookToRemove = "1984";
myLibrary.removeBook(bookToRemove);

console.log(`\n"${bookToRemove}" has been removed from the library.`);

// Display all books again after removal
console.log("\nBooks in Library after Removal:");
myLibrary.displayBooks();