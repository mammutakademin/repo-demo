function main() {
    let bookObj = {};
    let arrayBooks = [
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            numPages: 502
        },
        {
            title: "The Shining",
            author: "Stephen King",
            numPages: 567
        },
        {
            title: "My So-Called Life",
            author: "Maria Castillo",
            numPages: 383
        },
        {
            title: "The Green Tomato",
            author: "E. Pastrana",
            numPages: 500
        },
        {
            title: "The Hobbitt",
            author: "J.R.R. Tolkien",
            numPages: 1500
        }
    ];
    let bookTitle = "The Green Tomato";
    bookObj = bookAuthor = searchBook(arrayBooks, bookTitle);
}

function searchBook(arrBook, bTitle) {
    for(let i = 0; i < arrBook.length; i++) {
        if(arrBook[i].title === bTitle) {
            return arrBook[i];
        }
    }
    return null;
}

main()