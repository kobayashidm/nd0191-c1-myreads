import "./App.css";
import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf.js"

const testBooks = async () =>{
  const response =  await BooksAPI.getAll();
  console.log(response)

}

testBooks();

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      console.log(res);
      setBooks(res);
    };
    getBooks();
  },[]);
  
  console.log(books);

  const onChangeShelf = async (book, shelf) =>{

    await BooksAPI.update(book, shelf);

    if(shelf === "none"){
      setBooks(books.filter((b) => b.id !== book.id));
    }
    else{
      book.shelf = shelf;
      setBooks(books.filter((b) => b.id !== book.id).concat(book));
    }
  }

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
              <Shelf books = {books} shelfName = "Want to Read" shelf = "wantToRead" onCHangeShelf = {onChangeShelf} />
              <Shelf books = {books} shelfName = "Currently Reading" shelf = "currentlyReading" onCHangeShelf = {onChangeShelf} />
              <Shelf books = {books} shelfName = "Read" shelf = "read" onCHangeShelf = {onChangeShelf} />
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
