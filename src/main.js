const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const book = new Book(
    author = document.getElementsByName('author')[0].value,
    title = document.getElementsByName('title')[0].value,
    pages = document.getElementsByName('pages')[0].value,
    read = false,
  );
  myLibrary.push(book);
  document.getElementsByName('author')[0].value = '';
  document.getElementsByName('title')[0].value = '';
  document.getElementsByName('pages')[0].value = '';
  render();
}

function render() {
  const div = document.createElement('div');
  const title = document.createElement('h3');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const button = document.createElement('button');
  button.addEventListener('click', (e) => {
    switchStatus(e);
  });
  const remove = document.createElement('button');
  remove.addEventListener('click', (e) => {
    removeBook(e);
  });
  const body = document.querySelector('.flex');
  myLibrary.forEach((item, i) => {
    title.innerHTML = `Title: ${item.title}`;
    author.innerHTML = `Author: ${item.author}`;
    pages.innerHTML = `Number of pages: ${item.pages}`;
    button.innerHTML = 'Status';
    button.setAttribute('class', 'status');
    remove.innerHTML = 'Remove';
    remove.setAttribute('class', 'remove');
    div.appendChild(title).setAttribute('class', 'title');
    div.appendChild(author).setAttribute('class', 'author');
    div.appendChild(pages).setAttribute('class', 'pages');
    div.appendChild(button).setAttribute('rel', i);
    div.appendChild(remove).setAttribute('rel', i);

    body.appendChild(div).setAttribute('class', 'book-container');
  });
}

function setStatus(read, button) {
  if (read) {
    button.innerText = 'Read';
  } else {
    button.innerText = 'Not read yet';
  }
}

function switchStatus(e) {
  const index = e.srcElement.attributes['1'].value;
  myLibrary[parseInt(index)].read = !myLibrary[parseInt(index)].read;
  setStatus(myLibrary[parseInt(index)].read, e.target);
}

function removeBook(e) {
  const body = document.querySelector('.flex');
  const child = e.target.parentNode;
  if (child && myLibrary.length !== 0) {
    body.removeChild(child);
    const index = e.srcElement.attributes['1'].value;
    delete myLibrary[index];
  }
}
