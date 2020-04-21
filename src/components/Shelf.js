import React from 'react'
import { Book } from './Book'

export const Shelf = ({ shelf, books, moveBook }) => {
  //filters books so that they are on correct shelf
  const booksThatBelong = books.filter((book) => book.shelf === shelf.key)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksThatBelong.map((book) => (
            <Book
              key={book.id}
              currentBook={book}
              currentShelf={shelf.key}
              moveBook={moveBook}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}
