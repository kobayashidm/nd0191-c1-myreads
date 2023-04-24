import { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

const SearchPage = ({ books, onChangeShelf }) => {
  const [query, setQuery] = useState("");

  const searchHandle = (query) => {
    setQuery(query.trim());
  };

  const showingBooks =
    query === ""
      ? books
      : books.filter(
          (b) =>
            b.title.toLowerCase().includes(query.toLowerCase()) ||
            b.author.toLowerCase().includes(query.toLowerCase()) ||
            b.industryIndetifiers.identifier.includes(query)
        );

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
            {showingBooks.map((book) => (
              <Book book={book} key={book.id} onChangeShelf={onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
