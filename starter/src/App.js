import "./App.css";
import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf.js";
import { Route, Routes, Link } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      console.log(res);
      setBooks(res);
    };
    getBooks();
    return () => {
      setBooks([]);
    };
  }, []);

  const onChangeShelf = async (book, shelf) => {
    if (shelf === "none") {
      setBooks(books?.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setBooks(books?.filter((b) => b.id !== book.id).concat(book));
      await BooksAPI.update(book, shelf);
    }
  };

  return (
    <div className="app">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Shelf
                books={books}
                shelfName="Currently Reading"
                shelf="currentlyReading"
                onChangeShelf={onChangeShelf}
              />
              <Shelf
                books={books}
                shelfName="Want to Read"
                shelf="wantToRead"
                onChangeShelf={onChangeShelf}
              />
              <Shelf
                books={books}
                shelfName="Read"
                shelf="read"
                onChangeShelf={onChangeShelf}
              />
            </div>
          }
        />
        <Route
          exact
          path="/search"
          element={
            <div>
              <SearchPage
                books={books}
                key={books.id}
                onChangeShelf={onChangeShelf}
              />
            </div>
          }
        />
      </Routes>
      <div className="open-search">
        <Link className="open-search" to="/search">
          Add a Book
        </Link>
      </div>
    </div>
  );
}

export default App;
