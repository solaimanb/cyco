import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Container from './components/container/Container';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import router from './routes/Routes';

const queryClient = new QueryClient;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Container>
          <RouterProvider router={router} />
        </Container>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
