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