import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountdownProvider } from './context/CountdownContext';
import './index.css';
import App from './App.jsx';
import Home from './routes/Home';
import Countdown from './routes/Countdown';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <Countdown />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </StrictMode>,
);
