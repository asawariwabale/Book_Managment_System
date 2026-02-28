import React from 'react'

export default function FeatureDemo() {
  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4">Why Use Our Book Library?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-primary text-white shadow-sm" style={{ borderColor: '#111213' }}>
              <div className="card-body">
                <h5 className="card-title">Easy Book Tracking</h5>
                <p className="card-text">
                  Keep records of all books, including availability and issue status.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-success text-white shadow-sm" style={{ borderColor: '#0c110d' }}>
              <div className="card-body">
                <h5 className="card-title">Organized Library</h5>
                <p className="card-text">
                  Categorize and manage books efficiently for quick access anytime.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-danger text-white shadow-sm" style={{ borderColor: '#100d0f' }}>
              <div className="card-body">
                <h5 className="card-title">User-Friendly System</h5>
                <p className="card-text">
                  Simple interface for adding, updating, and searching books with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-white py-3" style={{ backgroundColor: '#557da4' }}>
        <p>&copy; 2026 Book Libaray. All Rights Reserved.</p>
        <p>
          <a href="#privacy-policy" className="text-white">Privacy Policy</a> |{" "}
          <a href="#terms" className="text-white">Terms of Service</a>
        </p>
      </footer>
    </>
  )
}
