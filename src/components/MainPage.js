import React from 'react'
import { Shelf } from './Shelf'
import { Link } from 'react-router-dom'

export const MainPage = ({ bookshelves, books, moveBook }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf) => (
            <Shelf
              key={shelf.key}
              shelf={shelf}
              books={books}
              moveBook={moveBook}
            />
          ))}
        </div>
      </div>

      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  )
}

//todo make a reducer for main page state to pass along
