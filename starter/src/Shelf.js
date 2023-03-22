import React from 'react'

const Shelf = (books, shelf) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    books.map((book) => {
                        <Book key = {book.id} book = {book} shelf = {shelf} />
                    })
                }
                <Books />
            </ol>
        </div>
    </div>

)

export default Shelf;
