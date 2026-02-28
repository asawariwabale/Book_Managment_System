import React from 'react'
import NavbarDemo from './NavbarDemo';

export default function About() {
  return (
    <>
      <NavbarDemo />

      <div
        className="about-section text-center"
        style={{ backgroundColor: '#d6f0fd', padding: '50px 20px' }}
      >
        <h1 className="display-4">About Our Library</h1>
        <p className="lead">
          We provide a simple and efficient way to manage books, users, and library records digitally.
        </p>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Our Mission</h2>
        <p className="text-center">
          Our mission is to make book and library management easier through technology. 
          We aim to help schools, colleges, and libraries maintain records accurately 
          while saving time and effort.
        </p>
      </div>

      <div
        className="container my-5"
        style={{ backgroundColor: '#b1d6fa', padding: '30px', borderRadius: '8px' }}
      >
        <h2 className="text-center mb-4">Our Story</h2>
        <p className="text-center">
          The Book Management System was created to replace manual record keeping with a 
          smart digital solution. It helps librarians and administrators easily add, update, 
          search, and track books in real time.
        </p>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">System Highlights</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="/Record1.png" className="card-img-top" alt="Book Records" />
              <div className="card-body">
                <h5 className="card-title">Book Records</h5>
                <p className="card-text">Maintain detailed information about every book in the system.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/Record2.png" className="card-img-top" alt="Search Books" />
              <div className="card-body">
                <h5 className="card-title">Easy Search</h5>
                <p className="card-text">Quickly find books using title, author, or category.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/Record3.png" className="card-img-top" alt="Manage Users" />
              <div className="card-body">
                <h5 className="card-title">User Management</h5>
                <p className="card-text">Manage users and track issued and returned books efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center bg-secondary text-white py-3">
        <p>&copy; 2026 Book Library . All Rights Reserved.</p>
      </footer>
    </>
  );
}
