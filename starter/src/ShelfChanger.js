import React from 'react'


const ShelfChanger = ({book, onChangeShelf}) =>{

  const handleShelfChanger = (e)=>{
    const value = e.target.value;
    onChangeShelf(book, value);
  }

  <div className="book-shelf-changer">
  <select onClick={handleShelfChanger} value = {book.shelf ? book.shelf : "none"}>
    <option value="none" disabled>
      Move to...
    </option>
    <option value="currentlyReading">
      Currently Reading
    </option>
    <option value="wantToRead">Want to Read</option>
    <option value="read">Read</option>
    <option value="none">None</option>
  </select>
</div>
}

export default ShelfChanger;