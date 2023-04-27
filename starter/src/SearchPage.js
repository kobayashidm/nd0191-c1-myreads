import { useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

const SearchPage = ({ books, onChangeShelf }) => {
  const [query, setQuery] = useState("");

  const searchHandle = (query) => {
    console.log(query); 
    setQuery(query.trim());
  };

  const showingBooks = 
    query === ""
      ? books
      : books.filter(
          (b) => {
            return b.title.toLowerCase().includes(query.toLowerCase()) 
            //|| b.author.toLowerCase().includes(query.toLowerCase()) || b.industryIndetifiers.identifier.includes(query)
          }

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
            {showingBooks.map((books) => (
              <Book book={books} key={books.id} onChangeShelf={onChangeShelf} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
