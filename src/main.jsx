import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductDetails from './Components/ProductsDetails/ProductDetails.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import ContextProvider from './utils/Context/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
