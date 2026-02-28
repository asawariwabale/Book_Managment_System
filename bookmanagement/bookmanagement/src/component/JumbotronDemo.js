import React from 'react'

export default function JumbotronDemo() {
  return (
     <div className="jumbotron text-center"style={{ backgroundColor: '#fbffc4', color: '#212529' }} >
  <img src="/book.png" alt="Book Management" className="img-fluid mb-2" style={{ maxHeight: '300px' }} />
  
  <h1 className="display-4">Welcome to the Book Library</h1>

  <p className="lead">Easily manage, organize, and explore your book collection all in one place. </p>
  
  <hr className="my-4" />

  <p>  Browse books, add new titles, and keep track of your library with ease. </p> 
</div>
  )
}
