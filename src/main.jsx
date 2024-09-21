import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import CustomHook from './components/CustomHook';
import UseCallback from './components/UseCallback';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseState from './components/UseState';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} />
      <Route path='useState' element={<UseState />} />
      <Route path='useEffect' element={<UseEffect />} />
      <Route path='useRef' element={<UseRef />} />
      <Route path='useCallback' element={<UseCallback />} />
      <Route path='customHook' element={<CustomHook />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
