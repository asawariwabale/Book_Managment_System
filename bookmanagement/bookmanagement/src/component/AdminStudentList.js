import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export default function AdminStudentList() {

      const [books, setBooks] = useState([]);

       useEffect(() => {
      axios.get('http://localhost:8081/getAll')
        .then(response => setBooks(response.data))
        .catch(error => console.error('Error fetching products', error));
    }, []);

    const handleDelete = (id) => {
        console.log(typeof id+" "+id);
        axios.delete(`http://localhost:8081/delete/${id}`)
          .then(() => {
            setBooks(books.filter(book => book.id !== id));
          })
          .catch(error => console.error('Error deleting book:', error));
      };


  return (
    
      <div>
         <table className="w-100 table-auto table-striped">
          <thead>
            <tr>
            <th className="border px-4 py-2">Book Id</th>
              <th className="border px-4 py-2">Book Name</th>
              <th className="border px-4 py-2">Book Author</th>
              <th className="border px-4 py-2">Actions</th>
             
            </tr>
          </thead>
          <tbody>
                 {books.map(book => (
              <tr key={book.id}>
                  <td className="border px-4 py-2">{book.id}</td>
                <td className="border px-4 py-2">{book.name}</td>
                <td className="border px-4 py-2">{book.author}</td>
                 <td className="border px-4 py-2">
                <Link to={`/edit-book/${book.id}`} className="text-blue-500 mr-4">Edit</Link>
               <button onClick={() => handleDelete(book.id)} className="text-red-500 mr-5">Delete</button>
                   </td>
                    </tr>
               ) )}
          </tbody>
        </table>
      </div>
    
  )
}
