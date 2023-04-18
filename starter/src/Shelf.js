import React from 'react'
import Book from './Book'


const Shelf = ({books, shelf, shelfName, onChangeShelf}) => {
    
    const bookShelf = books.filter((book) => book.shelf === shelf);
    
    return (

    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    bookShelf.map((book) =>(
                        <div  key = {book.id}>
                        <Book book = {book} onChangeShelf = {onChangeShelf} />
                        </div> 

                    ))
                }
            </ol>
        </div>
    </div>

)}

export default Shelf;
