import { useEffect, useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

const SearchPage = ({ books, onChangeShelf }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  
  const searchHandle = (query) => {
    console.log(query);
    setQuery(query.trim());
  };

  useEffect(() => {
    const searchBooks = async () => {
      if (query === "") {
        setSearchedBooks([]);
      } else {
        const res = await BooksAPI.search(query);
        if (res.error) {
          setSearchedBooks([]);
        } else {
          setSearchedBooks(res);

        }
      }
    };
    searchBooks();
    return () => {
      setSearchedBooks([]);
    };
  }, [books, query]);

  searchedBooks.map(book =>{
    const booksOnShelf = books.find(b => b.id === book.id)
    if(booksOnShelf) {
      book.shelf = books.shelf;
    }
    else{
      book.shelf = "none"
    }
    return book;
  })

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(e) => searchHandle(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <div>
          <ol className="books-grid">
            {mergedBooks?.map((b) => (
              <Book book={b} key={b.id} onChangeShelf={onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
