function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.bookInfo = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    };
}

let harryPotter = new Book('The Chamber of Secrets', 'JK Rowling', 327);
let catInTheHat = new Book('The Cat In The Hat', 'Dr. Seuss', 30);

console.log(harryPotter.bookInfo());
console.log(catInTheHat.bookInfo());
