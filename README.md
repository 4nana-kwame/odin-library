# odin-library

This is a simple web application that allows users to manage a personal book collection.

# Features
- Add new books with title, author, number of pages, and read status.
- Automatically formats and capitalizes book titles and author names.
- Mark books as read/unread.
- Remove books from the library.
- Responsive layout using CSS Grid and Flexbox.
- Dialog-based form with real-time validation feedback.
- Sample book entries preloaded on page load.

# How it works
- Books are stored in a JavaScript array (`myLibrary`).
- Each book is represented as an object created from the `Book` constructor.
- Users add books via a modal dialog (`<dialog>` element) and form.
- Input values are validated and cleaned before adding to the library.
- UI updates dynamically based on the current library state.
- Books have unique `bookId` values generated using `crypto.randomUUID()`.

# Technologies used
- HTML
- CSS
- JavaScript
- Google fonts (Roboto)

# Sample books
Six books are preloaded to demonstrate the functionality:
- *The Way Of Kings* by Brandon Sanderson
- *Red Rising* by Pierce Brown
- *Shadows Of Self* by Brandon Sanderson
- *The Sword Of Kaigen* by M.L. Wang
- *The Hunger Games* by Suzanne Collins
- *Words Of Radiance* by Brandon Sanderson