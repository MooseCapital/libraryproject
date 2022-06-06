

function Book(title, author, pages, read, cover) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = cover;
}

Book.prototype.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read} `;
}
//"The" + title + "by" +  author
const Hobbit = new Book("Hobbit","J.R.R Tolkien", 295, true, "images/hobbitcover.jpeg");
console.log(Hobbit.info())



let myLibrary = [];
myLibrary.push(Hobbit)
console.table(myLibrary)
function addBooktoLibrary() {


}


//if user doesn't have an image, have stock lieather book image that we use, so they select "no image"















