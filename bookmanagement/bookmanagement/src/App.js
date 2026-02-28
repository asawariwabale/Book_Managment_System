import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import AdminDashBoard from './component/AdminDashBoard';
import EditBook from './component/EditBook';
import AddBook from './component/AddBook';


function App() {
  return (
   <>
    <BrowserRouter>
       
      <div className="container-fluid1">
        <Routes>
       
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route path="/admin-dashboard" element={<AdminDashBoard />} />

          <Route path="/edit-book/:id" element={<EditBook />} />
          
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      
      </div>
    
    </BrowserRouter>
   
   </>
  );
}

export default App;
