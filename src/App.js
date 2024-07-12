// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import About from './Components/About';
import Contact from './Components/Contact';
import Popular from './Components/Popular';
import Login from './Components/login/index';
import Register from './Components/register/index';
import { AuthProvider } from './contexts/authContext/index';

// import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/popular" element={<Popular />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      </AuthProvider>
      {/* <Analytics /> */}
    </Router>
  );
}

export default App;
