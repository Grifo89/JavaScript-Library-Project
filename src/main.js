let myLibrary = []

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let book = new Book(
    author = document.getElementsByName('author')[0].value,
    title = document.getElementsByName('title')[0].value,
    pages = document.getElementsByName('pages')[0].value,
    read = false
  );
  myLibrary.push(book)
  render()
}

function render() {
  let div = document.createElement("div")
  let title = document.createElement("h3")
  let author = document.createElement("span")
  let pages = document.createElement("span")
  let button = document.createElement("button")
  button.addEventListener('click', (e) => {
    switchStatus(e)
  })
  let remove = document.createElement('button')
  let body = document.querySelector("body")
  myLibrary.forEach((item, i) => {
    title.innerHTML = item.title
    author.innerHTML = item.author
    pages.innerHTML = item.pages
    button.innerHTML = "Status"
    button.setAttribute('class', 'status')
    remove.innerHTML = 'Remove'
    remove.setAttribute('class', 'remove')
    div.appendChild(title).setAttribute('class', 'title')
    div.appendChild(author).setAttribute('class', 'author')
    div.appendChild(pages).setAttribute('class', 'pages')
    div.appendChild(button).setAttribute("rel", i)
    div.appendChild(remove).setAttribute('rel', i)
    
    body.appendChild(div).setAttribute('class', 'book-container')
  });
}

function setStatus(read, button) {
  if (read) {
    button.innerText = 'Read'
  } else {
    button.innerText = 'Not read yet'
  }
}

function switchStatus(e) {
  let index = e.srcElement.attributes["1"].value
  myLibrary[parseInt(index)].read = !myLibrary[parseInt(index)].read
  setStatus(myLibrary[parseInt(index)].read, e.target)
}

function removeBook() {
  addEventListener('click', (e) => {
    let index = e.srcElement.attributes["3"].value
    delete myLibrary[index]
  })
}
