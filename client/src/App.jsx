import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import ScrollToTop from '@/routes/scrollOnTop';
import {UserProvider } from '@/context/userContext';

export default function App() {

  return (
    <>
      <UserProvider>
        <RouterProvider router={router} >
          <ScrollToTop />
        </RouterProvider>
      </UserProvider>
    </>
  )
}