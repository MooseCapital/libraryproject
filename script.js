let booktitle = document.querySelector(".booktitle");
let bookauthor = document.querySelector(".bookauthor");
let bookpages = document.querySelector(".bookpages");
let bookread= document.querySelector(".bookread");
const addButton = document.querySelector(".addbutton");
let maincontent = document.querySelector(".maincontent");

const addto = document.querySelector(".addto");


addto.addEventListener("click", openTheForm);
addButton.addEventListener("click", createClone);
document.querySelector(".formexit").addEventListener("click", exitTheForm);

function Book(title, author, pages, read, cover) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

Book.prototype.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read} `;
}
//"The" + title + "by" +  author
const Hobbit = new Book("The Hobbit","J.R.R Tolkien", 295, false);
console.log(Hobbit.info())



let Library = [];

console.table(Library)
function addBooktoLibrary() {


}
function addExampleBooks(bookobj, index) {
    Library.push(bookobj)
    booktitle.innerText = Library[index].title;
    bookauthor.innerText = Library[index].author;
    bookpages.innerText = `Pages: ${Library[index].pages}`;
    bookread.innerText = Library[index].read;
    if (Library[index].read) {
        bookread.innerText = "Read";
    } else {
        bookread.innerText = "Not read"
    }
}
addExampleBooks(Hobbit, 0);

//remember when pressing close button for book, to remove it from the array, match the data-libraryindex="0"  number to the array
//index to remove the right one from the array.

/*testing clonenode before switching to this
function  createBook() {
let book = document.createElement("div");  //dont forget add data attribute later
book.classList.add("book");
book.setAttribute("data-libraryindex", `${Library.length - 1}`)

let exit = document.createElement("div");
exit.classList.add("exit");
exit.innerText = "x";

let title = document.createElement("div");
title.classList.add("booktitle");
title.innerText = `title placeholder`;

let author = document.createElement("div");
author.classList.add("bookauthor");
author.innerText = `author placeholder`;

let pages = document.createElement("div");
pages.classList.add("bookpages");
pages.innerText = `pages placeholder`;

let read= document.createElement("div");
read.classList.add("bookread"); 
read.innerText = `read placeholder`;


book.appendChild(exit);
book.appendChild(title);
book.appendChild(author);
book.appendChild(pages);
book.appendChild(read);

maincontent.appendChild(book);

}
*/

function createClone() {
let clone = document.querySelector(".book").cloneNode("true");
clone.setAttribute("data-libraryindex", `${Library.length + 1}`)
maincontent.appendChild(clone);
} 

function exitTheForm() {
document.querySelector(".addbooksection").setAttribute("style", "display: none");

}

function openTheForm() {
    document.querySelector(".addbooksection").setAttribute("style", "display: grid");

}






