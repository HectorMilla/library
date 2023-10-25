const bookList = document.querySelector("#books");
const newBookButton = document.getElementById("addBook");
const bookForm = document.querySelector("#bookForm");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; // read || not read
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}
myLibrary = ["The Hobbit", "Eragon", "test1", "test2"];
//loops through array of books and displays them on screen

let displayBooks = (library) => {
  library.forEach((book, index) => {
    const bookHtml = `
    <div id=${index} class=book>
        ${book}
        <div>
            <button data-index=${index} class=deleteBook>Delete</button>
            <button data-index=${index} class=readStatus>Mark as read</button>
        </div>
    </div>`;
    bookList.innerHTML += bookHtml;
  });
};

newBookButton.addEventListener("click", () => {
  bookForm.style.display = "block";
});
//prevent form submit default and remove form from screen
displayBooks(myLibrary);
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  bookForm.style.display = "none";
});

const deleteBookButton = document.querySelectorAll(".deleteBook");

for (let i = 0; i < deleteBookButton.length; i++) {}

bookList.addEventListener("click", (e) => {
  let elementId = e.target.dataset.index;
  let elementClass = e.target.className;
  let element = document.getElementById(elementId); // book div
  if (elementClass == "deleteBook") {
    myLibrary.splice(elementId, 1);
    element.remove();
  } else if (elementClass == "readStatus") {
    element.classList.toggle("read");
  }
});
let markAsRead = () => {};
// let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read");
// console.log(theHobbit.info());
