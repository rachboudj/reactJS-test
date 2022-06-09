import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App/App';
import Header from './Header/Header';
import Produit from './Produit/Produit';
import Message from './Message/Message';
import Contenu from './Contenu/Contenu';
import Contact from './Contact/Contact';



import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<App />} />  
          <Route path='contenu' element={<Contenu />} />
          <Route path='message' element={<Message />} />
          <Route path='produit' element={<Produit />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<Header />}>
    <Route index element={<App />} />
  </Route>
</Routes>
</BrowserRouter> */}

  </React.StrictMode>
);
