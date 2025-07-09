const dialog = document.querySelector('#dialog');
const addNewBook = document.querySelector('.add');
const cancel = document.querySelector('.cancel');
const booksContainer = document.querySelector('.books-container');
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
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    const bookPages = document.createElement('p');
    bookPages.classList.add('book-pages');
    const btnContainer = document.createElement('div');
    const readStatus = document.createElement('div');
    btnContainer.classList.add('btn-container');
    const toggleReadStatus = document.createElement('button');
    toggleReadStatus.classList.add('toggle-read-status');
    const removeBook = document.createElement('button');
    removeBook.classList.add('remove-book');

    bookTitle.textContent = book.title;
    bookAuthor.textContent = `by ${book.author}`;
    bookPages.textContent = `${book.numOfPages} pages`;
    removeBook.textContent = 'Remove Book';

    if (book.readStatus) {
      readStatus.classList.add('read');
      readStatus.textContent = ' Read';
      toggleReadStatus.textContent = 'Mark as unread';
    } else {
      readStatus.classList.add('not-read');
      readStatus.textContent = ' Not read';
      toggleReadStatus.textContent = 'Mark as read';
    }

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(readStatus);
    btnContainer.appendChild(toggleReadStatus);
    btnContainer.appendChild(removeBook);
    bookCard.appendChild(btnContainer);
    booksContainer.appendChild(bookCard);
  }
}

addNewBook.addEventListener('click', () => {
  dialog.showModal();
});

cancel.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.close();
});

// Sample books
addBookToLibrary('The Way Of Kings', 'Brandon Sanderson', 1093, true);
addBookToLibrary('Red Rising', 'Pierce Brown', 353, false);
addBookToLibrary('Shadows Of self', 'Brandon Sanderson', 375, true);
addBookToLibrary('The Sword Of Kaigen', 'M.L. Wang', 339, false);
addBookToLibrary('The Hunger Games', 'Suzanne Collins', 374, true);
addBookToLibrary('Words Of Radiance', 'Brandon Sanderson', 1300, true);

displayBook();