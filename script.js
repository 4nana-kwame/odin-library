const dialog = document.querySelector('#dialog');
const addNewBook = document.querySelector('.add');
const cancel = document.querySelector('.cancel');
const booksContainer = document.querySelector('.books-container');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const checkbox = document.querySelector('#read-status');
const dialogAddBtn = document.querySelector('.entry');
const inputs = document.querySelectorAll(`input[data-id='check-falsy']`);
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

Book.prototype.toggleReadStatus = function () {
  this.readStatus = !this.readStatus;
};

function addBookToLibrary(title, author, numOfPages, readStatus) {
  const book = new Book(title, author, numOfPages, readStatus);
  book['bookId'] = crypto.randomUUID();

  myLibrary.push(book);
}

function displayBook() {
  booksContainer.innerHTML = '';

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
    toggleReadStatus.setAttribute('data-id', 'change-status');
    toggleReadStatus.classList.add('toggle-read-status');
    const removeBook = document.createElement('button');
    removeBook.setAttribute('data-id', 'remove');
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

    btnContainer.addEventListener('click', function (event) {
      const target = event.target.dataset.id;

      if (!target) {
        return;
      }

      if (target === 'change-status') {
        book.toggleReadStatus();
        displayBook();
      } else if (target === 'remove') {
        booksContainer.removeChild(bookCard);
        removeBookId(book.bookId);
      }
    });

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

function removeBookId(id) {
  const index = myLibrary.findIndex(item => item.bookId === id);

  if (index !== -1) {
    myLibrary.splice(index, 1);
    displayBook();
  }
}

addNewBook.addEventListener('click', () => {
  dialog.showModal();
});

cancel.addEventListener('click', (event) => {
  event.preventDefault();
  clearForm();
  dialog.close();
});

function clearForm() {
  inputs.forEach((input) => {
    input.value = '';
    checkbox.checked = false;
    input.style.borderColor = '#b3b0b0';
  });
}

function validateAndCleanInputValues(title, author, pages, status) {
  for (let input of inputs) {
    if (!input.value) {
      input.style.borderColor = 'tomato';
      return;
    }
  }

  const titleArray = [];
  const authorArray = [];
  const cleanTitle = title.trim().toLowerCase().split(' ');
  const cleanAuthor = author.trim().toLowerCase().split(' ');

  cleanTitle.forEach((value) => {
    const newValueFormat = value.slice(0, 1).toUpperCase() + value.slice(1);

    titleArray.push(newValueFormat);
  });

  cleanAuthor.forEach((value) => {
    const newValueFormat = value.slice(0, 1).toUpperCase() + value.slice(1);

    authorArray.push(newValueFormat);
  });

  const newTitleFormat = titleArray.join(' ');
  const newAuthorFormat = authorArray.join(' ');
  const pagesToNumber = Number(pages);
  status = checkbox.checked ? true : false;

  addBookToLibrary(newTitleFormat, newAuthorFormat, pagesToNumber, status);

  displayBook();
}

dialogAddBtn.addEventListener('click', function (event) {
  event.preventDefault();

    validateAndCleanInputValues(title.value, author.value, pages.value, checkbox);

    clearForm();
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