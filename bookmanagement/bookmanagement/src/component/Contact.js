import React from 'react'
import NavbarDemo from './NavbarDemo'

export default function Contact() {
  return (
    <>
      <NavbarDemo />

      <div className="mt-5 pt-5" style={{  border: '2px solid black', width: '50%',  margin: 'auto', padding: '20px' }} >
        <h3>Library Contact Information</h3>

        <div className="contact-info">
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Email:</strong> support@booklibrary.com</p>
          <p><strong>Address:</strong> Central Library, Main Road, Pune, Maharashtra</p>
        </div>

        <h4>Follow Us</h4>
        <div className="d-flex">
          <a href="#" className="btn btn-primary me-2">Facebook</a>
          <a href="#" className="btn btn-info me-2">Twitter</a>
          <a href="#" className="btn btn-danger">Instagram</a>
        </div>
      </div>

      <div className="container my-5">
        <h3 className="text-center">Find Our Library</h3>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <iframe
              title="Library Location" src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d965643.5750846111!2d73.44464024115702!3d19.017729159748427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d19.6087058!2d73.2221671!4m3!3m2!1d19.3912264!2d73.4940787!5e0!3m2!1sen!2sin!4v1770285649810!5m2!1sen!2sin"  width="100%"  height="450"  style={{ border: 0 }}  allowFullScreen=""  loading="lazy" ></iframe>
          </div>
        </div>
      </div>

      <div className="footer text-center bg-secondary text-white py-3">
        <p>&copy; 2026 Book Management System. All Rights Reserved.</p>
      </div>
    </>
  )
}
