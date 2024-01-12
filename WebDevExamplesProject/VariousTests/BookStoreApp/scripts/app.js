// Book class: represents a Book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI Class: handles UI tasks
class UI {
    static displayBooks() {

        const books = Store.getBooks()

        for (const book of books) {
            UI.addBookToList(book)
        }
    }

    static addBookToList(book) {
        const bookList = document.querySelector("#book-list")
        const row = document.createElement("tr")

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>` //SONO BACKTICKS!

        bookList.appendChild(row)
    }

    static clearFields() {
        document.querySelector('#title').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }

    static deleteBook(targetElem) {
        if (targetElem.classList.contains('delete')) {
            targetElem.parentElement.parentElement.remove()
        }
    }

    static showAlert(message, className, time = 3000) {
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div, form)

        setTimeout(() => document.querySelector('.alert').remove(), time)
    }
}

//Store Class: Handles storage
class Store {
    static getBooks() {
        let books;

        if (localStorage.getItem('books') === null) books = []
        else books = JSON.parse(localStorage.getItem('books'))

        return books
    }

    static addBook(book) {
        const books = Store.getBooks()
        books.push(book)
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(isbn) {
        const books = Store.getBooks()

        books.forEach(
            (book, index) => {
                if (book.isbn === isbn) {
                    books.splice(index, 1)
                }
            }
        );

        localStorage.setItem('books', JSON.stringify(books))
    }
}

//Event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks)

//Event : add book
document.querySelector("#book-form").addEventListener('submit', (e) => {
    // prevent actual default submit
    e.preventDefault()

    // get form values
    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    //Fields Validation
    if (title === '' || author === '' || isbn === '') {
        UI.showAlert("Please fill all fields.", 'danger')
    } else {
        const book = new Book(title, author, isbn)

        UI.addBookToList(book)
        Store.addBook(book)
        UI.showAlert("Book added succesfully", 'success')
        UI.clearFields()
    }


});

//Event : rem book (Event propagation!)
document.querySelector('#book-list').addEventListener('click',
    (e) => {
        //We remove a book from UI
        UI.deleteBook(e.target)

        //We remove a book from Store
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent.trim());

        UI.showAlert("Book removed successfully", 'success')
    })