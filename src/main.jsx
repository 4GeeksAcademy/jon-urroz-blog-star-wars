import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' 
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarWarsProvider } from './context/StarWarsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StarWarsProvider>
        <App />
      </StarWarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
