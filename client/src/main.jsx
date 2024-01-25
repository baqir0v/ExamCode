import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import BasketProvider from './Context/basketContext.jsx'
import { HelmetProvider } from "react-helmet-async"
import WishlistProvider from './Context/wishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider>
      <BasketProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </BasketProvider>
    </HelmetProvider>
  </BrowserRouter>,
)
