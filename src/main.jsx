import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import App from './App.jsx';
import Users from './Users.jsx';
import Update from './Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App/>
      },
      {
        path: "/users",
        element: <Users/>,
        loader: () => fetch('http://localhost:3000/users')
      },
      {
        path: "/update/:id",
        element: <Update/>,
        loader: ({params}) => fetch(`http://localhost:3000/users/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
