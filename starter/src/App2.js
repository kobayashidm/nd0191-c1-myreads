import "./App.css";
import { useState } from "react";
import * as BooksAPI from "./BooksAPI"

async function App() {
  
  const getBook = async () =>{
    var books = BooksAPI.getAll();
    return books;
  }

  const booksList = await getBook();

  const shelfChange = () =>{
    setShelf()
  }

  const [showSearchPage, setShowSearchpage] = useState(false);
  const [shelf, setShelf] = useState();


}