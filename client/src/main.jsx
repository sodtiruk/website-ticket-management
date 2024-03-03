import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Ticket from './components/Ticket.jsx'
import Admin from './components/Admin.jsx'
import Update from './Update.jsx'

import { createBrowserRouter, RouterProvider} from "react-router-dom" 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ticket/>
  },
  {
    path: "admin",
    element: <Admin />
  },
  {
    path: "update",
    element: <Update /> 
  },
  {
    path: "update/:getId",
    element: <Update /> 
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
