import React from 'react'
import ShelfChanger from './ShelfChanger';

const Book = ({book, onChangeShelf}) =>(
    <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${
              book.imageLinks ? book.imageLinks.thumbnail : ""
            })`,
          }}
        ></div>
        <ShelfChanger book = {book} onChangeShelf = {onChangeShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  </li>
)

export default Book;