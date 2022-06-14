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
        bookread.innerText = "Not read"
    }
}
addExampleBooks(Hobbit, 0);

let btitle = document.querySelector("#b-title");
let bauthor = document.querySelector("#b-author");
let bpages = document.querySelector("#b-pages");
let clone;
let bookvar;



function createClone() {
    clone = document.querySelector(".book").cloneNode("true");
    checkm.push(false);




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

    document.querySelectorAll(".book").forEach((item, index) => {
        document.querySelectorAll(".exit").forEach((ex, index) => {
            ex.addEventListener("click", (e) => {
                e.target.parentElement.remove();
            })
        
        })
        document.querySelectorAll("#check").forEach( (check, index) => {
            check.addEventListener("click", (e) => {
                
                if (checkm[index] === false) {

                    checkm[index] = true;
                    document.querySelector(`[data-libraryindex='${index}'] .bookread `).innerText = "Read";
                    console.log("true");
                } else if(checkm[index] === true){

                    checkm[index] = false;
                    document.querySelector(`[data-libraryindex='${index}'] .bookread `).innerText = "Not Read";
                    console.log("false");
                }
            })
        
        }) 
    })



    console.table(Library);
    
} 




function exitTheForm() {
document.querySelector(".addbooksection").setAttribute("style", "display: none");

}

function openTheForm() {
    document.querySelector(".addbooksection").setAttribute("style", "display: grid");

}



let checkm = [false];


document.querySelectorAll("#check").forEach( (check, index) => {
    check.addEventListener("click", (e) => {

        if (checkm[index] === false) {

            checkm[index] = true;
            document.querySelector(`[data-libraryindex='${index}'] .bookread `).innerText = "Read";
            
        } else if(checkm[index] === true){

            checkm[index] = false;
            document.querySelector(`[data-libraryindex='${index}'] .bookread `).innerText = "Not Read";
            
        }
    })

})





