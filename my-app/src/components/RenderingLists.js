import React from 'react'

function RenderingLists() {
    const bookList = [
        'to kill bird',
        'IT',
        'the cool gatsby'
    ]

    const books = [
        {
            title: 'to kill bird',
            author: 'that gal',
            pages: 231
        },
        {
            title: 'IT',
            author: 'Mr.King',
            pages: 541
        },
        {
            title: 'the cool gatsby',
            author: 'jean stone',
            pages: 382
        },
    ]

  return (
    <div>
        {bookList.map(book => {
            return <h2>{book}</h2>
        })}
        <hr/>
        {
            books.map(book => {
                return (
                    <div>
                        <h5>Title: {book.title}</h5>
                        <p>Author: {book.author}</p>
                        <p>Number of pages: {book.pages}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default RenderingLists