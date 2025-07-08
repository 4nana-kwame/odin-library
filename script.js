const dialog = document.querySelector('#dialog');
const addNewBook = document.querySelector('.add');
const cancel = document.querySelector('.cancel');
const myLibrary = [];

function Book(title, author, numOfPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.readStatus = readStatus;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.readStatus}.`;
  }
}

function addBookToLibrary(title, author, numOfPages, readStatus) {
  const book = new Book(title, author, numOfPages, readStatus);
  book['bookId'] = crypto.randomUUID();

  myLibrary.push(book);
}

function displayBook() {
  for (let book of myLibrary) {
    
  }
}

addNewBook.addEventListener('click', () => {
  dialog.showModal();
});

cancel.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.close();
});