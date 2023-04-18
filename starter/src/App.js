import "./App.css";
import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import Shelf from "./Shelf.js"
import { Route, Routes, useNavigate } from "react-router-dom";


function App() {

  let navigate = useNavigate();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  },[]);
  
  const onChangeShelf = async (book, shelf) =>{

    await BooksAPI.update(book, shelf);

    if(shelf === "none"){
      setBooks(books?.filter((b) => b.id !== book.id));
    }
    else{
      book.shelf = shelf;
      setBooks(books?.filter((b) => b.id !== book.id).concat(book));
    }
  }

   return (
    <div className="app">
    <Routes>
      <Route exact path = "/"
      element = { 
      <div>
            <Shelf books = {books} shelfName = "Want to Read" shelf = "wantToRead" onChangeShelf = {onChangeShelf} />
            <Shelf books = {books} shelfName = "Currently Reading" shelf = "currentlyReading" onChangeShelf = {onChangeShelf} />
            <Shelf books = {books} shelfName = "Read" shelf = "read" onChangeShelf = {onChangeShelf} />

      </div> 
            

      }/>
    </Routes>
    </div>

  );
}

export default App;
