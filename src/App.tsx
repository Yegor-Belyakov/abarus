import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Posts from './components/posts';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Posts />
    </BrowserRouter>

  );
}

export default App;
