const apprun = () => {
    let myLibrary = [];
    function Book(title, author, pageNumber, read) {
        this.title = title;
        this.author = author;
        this.pageNumber = pageNumber;
        this.read = read;

    }
    function addBookToLibrary(title, author, pageNumber, read) {
        const newBook = new Book(title, author, pageNumber, read);
        myLibrary.push(newBook);
        showBooks(myLibrary);

    }
    addBookToLibrary('Harry Potter', "J k rowling", 200, false);
    addBookToLibrary("The Hobbit", "J R R Tolkien", 500, true);
    addBookToLibrary('The song of ice and fire', "J R R Martin", 1000);

    function showBooks(myLibrary) {
        const bookShelf = document.getElementById("book-shelf");
        bookShelf.innerHTML = '';
        let i = 0;
        for (const boo of myLibrary) {
            const div = document.createElement("div");
            div.classList.add("shelf");
            bookShelf.appendChild(div);
            showBooksDetail(boo, div, i);
            addButtonInBookCard(div, boo);
            i++;

        }
        attachEventHandling();
    }

    function getBookInfo(event) {
        addBookToLibrary(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("page").value, document.querySelector('input[name = "read"]:checked').value);
        event.preventDefault();
    }

    function addButtonInBookCard(bookCard, bookDetail) {
        const removeButton = document.createElement('button');
        const readToggle = document.createElement('button');
        removeButton.classList.add("remove");
        removeButton.textContent = "Remove";
        readToggle.classList.add("toggle-status");
        if (bookDetail.read === 'false') {
            readToggle.textContent = "Read";
        } else {
            readToggle.textContent = "Not read"
        }
        bookCard.append(removeButton, readToggle);
    }

    function showBooksDetail(bookDetail, bookCard, index) {
        bookCard.dataset.index = index;
        const titlePara = document.createElement("p");
        const authorPara = document.createElement("p");
        const pageNumberPara = document.createElement("p");
        const readPara = document.createElement("p");
        titlePara.textContent = `Title : ${bookDetail.title}`;
        authorPara.textContent = `Author : ${bookDetail.author}`;
        pageNumberPara.textContent = `Page : ${bookDetail.pageNumber}`;
        bookDetail.read === "true" ? readPara.textContent = "Status : read" : readPara.textContent = "Status : Not read";
        bookCard.append(titlePara, authorPara, pageNumberPara, readPara);
    }

    // function handleToggleStatus(event) {
    //     const toggleButton = event.target;
    //     const bookCard = toggleButton.parentElement;
    //     const index = bookCard.dataset.index;
    //     const book = myLibrary[index];
    //     book.read = !book.read;
    //     toggleButton.textContent = book.read ? "Not read" : "Read";
    // }

    function attachEventHandling() {
        document.querySelectorAll(".remove").forEach(box => {
            box.addEventListener('click', () => {
                myLibrary.splice(box.parentElement.dataset.index, 1);
                showBooks(myLibrary);
                console.table(myLibrary);
            })
        })
        document.querySelectorAll(".toggle-status").forEach(box => {
            box.addEventListener('click', () => {
                if (box.textContent === "Read") {
                    box.textContent = "Not read";
                } else {
                    box.textContent = "Read";
                }
            })
        });
    }



    // document.querySelectorAll(".toggle-status").forEach(box => {
    //     box.addEventListener('click', handleToggleStatus)
    // })

    document.getElementById("submit-bottom").addEventListener('click', getBookInfo, false);

    document.getElementById("show-form").addEventListener('click', () => {
        // document.querySelector("form").style.display = "block";
        if (document.querySelector("form").style.display === "block") {
            document.querySelector("form").style.display = "none";
            document.getElementById("show-form").textContent = "+";
        }
        else {
            document.querySelector("form").style.display = "block";
            document.getElementById("show-form").textContent = "--";
        }
    });
}
apprun();