let booktitle = document.querySelector(".booktitle");
let bookauthor = document.querySelector(".bookauthor");
let bookpages = document.querySelector(".bookpages");
let bookread= document.querySelector(".bookread");
const addButton = document.querySelector(".addbutton");
let maincontent = document.querySelector(".maincontent");
let book = document.querySelector(".book");
const addto = document.querySelector(".addto");
let exit = document.querySelectorAll(".exit");

addto.addEventListener("click", openTheForm);
addButton.addEventListener("click", createClone);
document.querySelector(".formexit").addEventListener("click", exitTheForm);

function Book(title, author, pages, read) {
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

let btitle = document.querySelector("#b-title");
let bauthor = document.querySelector("#b-author");
let bpages = document.querySelector("#b-pages");
let clone;
let bookvar;
let currentdatalib;
let libindex = 0;


function createClone() {
clone = document.querySelector(".book").cloneNode("true");





//when setting object name to title, remember to remove spaces
bookvar = new Book(btitle.value.toString(),bauthor.value.toString(), bpages.value, false); //create new book object

Library.push(bookvar) //adding the actual book to our array

clone.setAttribute("data-libraryindex", `${Library.length - 1}`);

maincontent.appendChild(clone); //adding content to the actual page



document.querySelector(`[data-libraryindex='${Library.length - 1}'] .booktitle `).innerText = btitle.value;
document.querySelector(`[data-libraryindex='${Library.length - 1}'] .bookauthor `).innerText = bauthor.value;
document.querySelector(`[data-libraryindex='${Library.length - 1}'] .bookpages `).innerText = `Pages: ${bpages.value}`;



btitle.value = "";
bauthor.value = "";
bpages.value = "";


} 

// function setInnerText() {
// booktitle.innerText = Library[Library.length - 1].title;
// bookauthor.innerText = Library[Library.length - 1].author;
// bookpages.innerText = `Pages: ${Library[Library.length - 1].pages}`;
//
// }

function exitTheForm() {
document.querySelector(".addbooksection").setAttribute("style", "display: none");

}

function openTheForm() {
    document.querySelector(".addbooksection").setAttribute("style", "display: grid");

}



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
let checkm = false;
document.querySelector("#check").addEventListener("click", readCheck);

function readCheck() {
if (checkm == false) {
    
    checkm = true;
    bookread.innerText = "Read";
    console.log("true");
} else if(checkm == true){
    
    checkm = false;
    bookread.innerText = "Not Read";
    console.log("false");
}

}

exit.forEach(function (item) {
    item.addEventListener("click", () => {
       item.parentNode.remove();
        })
});







