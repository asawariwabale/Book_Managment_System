import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarDemo from './NavbarDemo';


export default function AddBook() {
    const navigate = useNavigate();
    const [book, setBook] = useState({
       id:"",
        name:"",
        author:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevBook => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/add', book)
            .then(response => {
                console.log('Book added successfully:', response.data);

                setBook({  name:"", author:"" });
                navigate('/admin-dashboard');
            })
            .catch(error => {
                console.error('Error adding book:', error);
            });
    };

  return (
    <div>
      <NavbarDemo />
        <div className="myDiv mt-5 pt-5">
            <h1>Add Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={book.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" value={book.author} onChange={handleChange} />
                </div>
                <button type="submit">Add Book</button>
            </form>
            </div>
    </div>
  )
}
