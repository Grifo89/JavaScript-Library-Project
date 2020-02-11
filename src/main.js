let myLibrary = []

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.page = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  return myLibrary.push(book)
}

function render() {
  let div = document.createElement("div")
  let title = document.createElement("h3")
  let author = document.createElement("span")
  let pages = document.createElement("span")
  let button = document.createElement("button")
  let body = document.querySelector("body")
  myLibrary.forEach((item, i) => {
    div.appendChild(title.innerHTML = item.title)
    div.appendChild(author.innerHTML = item.author)
    div.appendChild(pages.innerHTML = item.pages)
    div.appendChild(button.innerHTML = "Status").setAttribute("rel", i);
    body.appendChild(div)
  });
}

function switchStatus() {
  addEventListener("click", (e) => {
    let index = e.srcElement.attributes["3"].value
    myLibrary[parseInt(index)][read] = true
  })
}
