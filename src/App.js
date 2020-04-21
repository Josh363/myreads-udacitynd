import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { MainPage } from './components/MainPage'
import { SearchPage } from './components/SearchPage'
import { Route } from 'react-router-dom'

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' },
]

const BooksApp = () => {
  const [books, setBooks] = useState([])

  //get all books
  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBooks(books)
      })
      .catch((err) => {
        console.log(err)
      })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //move books between shelves
  const moveBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(() => {
        BooksAPI.getAll().then((books) => {
          setBooks(books)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="app">
      <Route
        exact
        path="/"
        render={() => (
          <MainPage
            bookshelves={bookshelves}
            books={books}
            moveBook={moveBook}
          />
        )}
      />
      <Route
        path="/search"
        render={() => <SearchPage moveBook={moveBook} booksOnShelves={books} />}
      />
    </div>
  )
}

export default BooksApp
