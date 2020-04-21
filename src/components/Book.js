import React, { useState } from 'react'

export const Book = ({ currentBook, currentShelf, moveBook }) => {
  const [bookShelf, setBookShelf] = useState(currentShelf)

  //puts a book on its correct shelf depending on the option chosen
  const handleChange = (e) => {
    const { value } = e.target
    setBookShelf(value)
    moveBook(currentBook, value)
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                currentBook.imageLinks
                  ? currentBook.imageLinks.thumbnail
                  : 'icons/book-placeholder.svg'
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select value={bookShelf} onChange={handleChange}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{currentBook.title}</div>
        <div className="book-authors">
          {currentBook.authors
            ? currentBook.authors.join(', ')
            : 'Unknown Author'}
        </div>
      </div>
    </li>
  )
}
