 
 import React, { useState, useEffect } from 'react';

 import axios from 'axios';
 import { useNavigate, useParams } from 'react-router-dom';
 import NavbarDemo from './NavbarDemo';
 import './EditBook.css';



 export default function EditBook() {

    const { id }= useParams();
    const navigate = useNavigate();

    const [book, setBook] = useState({
       id:"",
       name:"",
       author:""
    });

    useEffect(() => {
    axios.get(`http://localhost:8081/getOne/${id}`)
      .then(response => {
        console.log("Book Data:", response.data);
        setBook(response.data);
      })
      .catch(error => console.error('Error fetching book:', error));
  }, [id]);

    const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8081/update/${id}`, book)
      .then(response => {
        console.log('Book updated successfully:', response.data);
        navigate('/books');
      })
      .catch(error => {
        console.error('Error updating book:', error);
      });
  };

   return (
     <div>
       <NavbarDemo/>
        <div className="myDiv mt-5 pt-5">
         <h1>Edit Book</h1>
         <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={book.name || ""}
                  onChange={handleChange}
                  required
                />
    </div>
                <div>
                <label>Author:</label>
                <input
                  type="text"
                  name="author"
                  value={book.author || ""}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit">Update Book</button>
            </form>
            </div>
        </div>
     
   );
 }
 

 