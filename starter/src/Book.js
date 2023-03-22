import React from 'react'

const Book = ({book, shelf}) =>(
    <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url("${book.imageLink.thumbnail}")`
          }}
        ></div>
        <ShelfChanger book = {book} shelf = {shelf} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
    </div>
  </li>
)

export default Book;