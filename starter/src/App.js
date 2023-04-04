import "./App.css";
import { useState } from "react";
import { getAll } from "./BooksAPI";
import {Shelf} from "./Shelf.js"

const getBooks = async () =>{
  var books = await getAll();
  return books;
}

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

    var bookFromAPI = getBooks();
    console.log(bookFromAPI);

    const books = getBooks();
    

  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf books = {books} shelf = "Want to Read" onCHangeShelf = {onCHangeShelf} />
              <Shelf books = {books} shelf = "Currently Reading" onCHangeShelf = {onCHangeShelf} />
              <Shelf books = {books} shelf = "Read" onCHangeShelf = {onCHangeShelf} />
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
