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
// const Potter = new Book("harry potter", "JK rowling", 122, false);
// const giver = new Book("The Giver", "something", 122, true)


let Library = [];


function addExampleBooks(bookobj, index) {
    Library.push(bookobj)
    booktitle.innerText = Library[index].title;
    bookauthor.innerText = Library[index].author;
    bookpages.innerText = `Pages: ${Library[index].pages}`;
    bookread.innerText = Library[index].read;
    if (Library[index].read) {
        bookread.innerText = "Read";
    } else {
        bookread.innerText = "Not Read"
    }
}
addExampleBooks(Hobbit, 0);
// addExampleBooks(Potter, 1);
// addExampleBooks(giver, 2)

let btitle = document.querySelector("#b-title");
let bauthor = document.querySelector("#b-author");
let bpages = document.querySelector("#b-pages");
let clone;
let bookvar;



function createClone() {
    if (!Library.length) {
        console.log("no books to clone")

        alert("No Books Available to Clone. Refresh the page and keep atleast one book in the future please!")
    }
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



    console.table(Library);
    
} 


//document.querySelector(`[data-libraryindex='${index}'] .bookread `)

function exitTheForm() {
document.querySelector(".addbooksection").setAttribute("style", "display: none");

}

function openTheForm() {
    document.querySelector(".addbooksection").setAttribute("style", "display: grid");

}



maincontent.addEventListener("click", (e) => {

    let nearbook = e.target.closest(".book");
    let maincontent = e.target.closest(".maincontent");
    let mainarr;

    if (nearbook) {


        if (e.target.closest(".exit")) {

            Library.splice(nearbook.getAttribute("data-libraryindex"),1);
            //localStorage.setItem('home', JSON.stringify([...home]));

            nearbook.remove();

            mainarr = Array.from(maincontent.children);
            for (let i = 0; i < mainarr.length; i++) {
                maincontent.children[i].setAttribute("data-libraryindex", i.toString())

            }


            console.log(Library)
        }

        if (e.target.closest("#check")) {

                if (e.target.closest("#check").checked) {
                    nearbook.querySelector(".bookread").innerText = "Read";
                } else {
                    nearbook.querySelector(".bookread").innerText = "Not Read";
                }

        }

    }

})







