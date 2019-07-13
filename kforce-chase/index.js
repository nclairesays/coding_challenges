let books = [{
    id: 1,
    name: 'First book'
  }];
  let nextBookId = 2;
  
  /*
    TODO: The existing code uses functions called `addBook` and `deleteBook`, implement them.
  */
  
  function deleteBook(book) {
    console.log('something deleted', )
    const index = books.indexOf(book)
    
  }
  
  function addBook(e) {
    console.log('add book', e)
  }
  
  
  function render() {
    const container = document.querySelector('.book-list');
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    books.forEach(book => {
      const bookNameElement = document.createElement('span');
      bookNameElement.className = 'book-name';
      bookNameElement.innerHTML = book.name;
  
      const deleteButtonElement = document.createElement('button');
      deleteButtonElement.className = 'delete-book btn btn-danger';
      deleteButtonElement.innerHTML = 'Delete';
      deleteButtonElement.onclick = () => deleteBook(book);
  
      const bookElement = document.createElement('li');
      bookElement.className = 'list-group-book book row';
      bookElement.appendChild(bookNameElement);
      bookElement.appendChild(deleteButtonElement);
  
      container.appendChild(bookElement);
    });
  }
  
  document.querySelector('#addBook').addEventListener('click', addBook);
  
  render();
  