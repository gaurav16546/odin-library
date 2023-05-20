let myLibrary = [];
function Book(title, author, pageNumber, read) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.read = read;

}
function addBookToLibrary(title, author, pageNumber, read = false) {
    const newBook = new Book(title, author, pageNumber, read);
    myLibrary.push(newBook);
}
addBookToLibrary('Harry Potter', "J k rowling", 200, false);
addBookToLibrary("The Hobbit", "J R R Tolkien", 500, true);
addBookToLibrary('The song of ice and fire', "J R R Martin", 1000);

function showBooks(myLibrary) {
    const bookShelf = document.getElementById("book-shelf");
    for (const boo of myLibrary) {
        const div = document.createElement("div");
        div.classList.add("shelf");
        bookShelf.appendChild(div);
        const titlePara = document.createElement("p");
        const authorPara = document.createElement("p");
        const pageNumberPara = document.createElement("p");
        const readPara = document.createElement("p");
        titlePara.textContent = `Title : ${boo.title}`;
        authorPara.textContent = `Author : ${boo.author}`;
        pageNumberPara.textContent = `Page : ${boo.pageNumber}`;
        boo.read ? readPara.textContent = "Status : read" : readPara.textContent = "Status : Not read";
        bookShelf.append(titlePara, authorPara, pageNumberPara, readPara);
    }
}
showBooks(myLibrary);