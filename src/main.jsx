import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './pages/layout/Layout';
import Index, { loader as loaderClient } from './pages';
import NewClient, { action as actionNewClient } from './pages/NewClient';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Index />,  
        loader: loaderClient, // Carga de datos
        errorElement: <ErrorPage /> // Se muestra si hubo un error en el elemento
      },
      {
        path: '/clientes/nuevo',
        element: <NewClient />,
        action: actionNewClient // Manejo de respuesta de los metodos
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
