const bookList = document.getElementById("books");
const newBookButton = document.getElementById("addBook");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // read || not read
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}
myLibrary = ["The Hobbit", "Eragon"];
//loops through array of books and displays them on screen
let addBookToLibrary = () => {
  myLibrary.forEach((book) => {
    const libraryBook = document.createElement("div");
    libraryBook.innerText = book;
    bookList.appendChild(libraryBook);
  });
};

newBookButton.addEventListener("click", () => {});
addBookToLibrary();
// let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read");
// console.log(theHobbit.info());