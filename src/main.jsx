import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Container from './components/container/Container';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import router from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <AuthProvider>
      <Container>
        
      </Container>
    </AuthProvider>
  </React.StrictMode>
);
