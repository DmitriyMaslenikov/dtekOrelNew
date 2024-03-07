import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.css';
import Providers from './providers';
// import Root from './components/mainPage/page.tsx';

import { MainPage } from '../src/components/mainPage/mainPage.tsx';
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  // {
  //   path: 'page1',
  //   element: (
  //     <Providers>
  //       <React.StrictMode>
  //         <Page1 />
  //       </React.StrictMode>
  //     </Providers>
  //   ),
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </QueryClientProvider>
);
