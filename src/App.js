import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomLayout from './CustomLayout';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CustomLayout />} />
        <Route path="/page1" element={<div>Page 1 Content</div>} />
        <Route path="/page2" element={<div>Page 2 Content</div>} />
        <Route path="/page3" element={<div>Page 3 Content</div>} />
        <Route path="/page4" element={<div>Page 4 Content</div>} />
        <Route path="/page5" element={<div>Page 5 Content</div>} />
        <Route path="/page6" element={<div>Page 6 Content</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
