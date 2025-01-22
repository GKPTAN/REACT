import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1 - configurando router;
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// 2 - importar páginas;
import Home from './routes/Home';
import Contact from './routes/Contact';
import ErrorPage from './routes/ErrorPage';
import ContactDetails from './routes/ContactDetails';

// 3 - criar uma constante router que vai receber como valor a função createBrowserRouter que vai colocar as páginas dentro de um array como objeto; path é o caminho até a página; element é o componente principal da página;

// 7 - versão sem Outlet;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   }
// ]);

// 8 - versão usando o componente Outlet:
// 10 - errorElement serve para transmitir uma mensagem de erro personalizada  para o usuário caso acesse uma página inexistente;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 12 - rota aninhada - identificador único - chamado também de rotas dinâmicas;
      {
        path: "/contact/:id",
        element: <ContactDetails />
      },
      // 15 - navigate para páginas não existentes;
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ]
  },
]);

// 4 - registrar a váriavel router no componente RouterProvider, para mostrar as rotas no navegador;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
