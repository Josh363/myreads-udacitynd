import React, { useState } from 'react'
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import { Book } from './Book'

export const SearchPage = ({ moveBook, booksOnShelves }) => {
  const [searchBook, setSearchBook] = useState([])
  const [query, setQuery] = useState('')

  //renders book search
  const onSearch = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then((books) => {
          books.error ? setSearchBook([]) : setSearchBook(books)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const updateSearchBook = searchBook.filter(function(book) {
    return !booksOnShelves.includes(book)
  })

  //passes the search query value into the onSearch function
  const handleChange = (e) => {
    const { value } = e.target
    setQuery(value)
    onSearch(value)
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            placeholder="Search by title or author"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {updateSearchBook.map((book, index) => (
            <Book
              key={index}
              currentBook={book}
              currentShelf={book.shelf ? book.shelf : 'none'}
              moveBook={moveBook}
            />
          ))}
        </ol>
      </div>
    </div>
  )
}
