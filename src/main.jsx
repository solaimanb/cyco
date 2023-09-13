import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import router from './routes/Routes';
import store from './store/Store';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <NextUIProvider>
              <Provider store={store}>
                <RouterProvider router={router} />
              </Provider>
          </NextUIProvider>
        </AuthProvider>
      </QueryClientProvider>
    
  </React.StrictMode>
);
