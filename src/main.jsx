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

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />, // This is the main layout component
//   },
//   {
//     path: 'useState', // This is the new page route
//     element: <UseState />, // This renders the UseState component
//   },
//   {
//     path:'useEffect',
//     element:<UseEffect/>

//   },
//   {
//     path:'useRef',
//     element:<UseRef/>

//   },
//   {
//     path:'useCallback',
//     element:<UseCallback/>

//   }
//   ,{
//     path:'customHook',
//     element:<CustomHook/>
//   }
// ]);

const router=createBrowserRouter(
 createRoutesFromElements(
  <>
  <Route path='/' element={<App/>}/>,
  <Route path='useState' element={<UseState/>}/>,
  <Route path='useEffect' element={<UseEffect/>}/>,
  <Route path='useCallback' element={<UseCallback/>}/>,
  <Route path='useRef' element={<UseRef/>}/>,
  <Route path='customHook' element={<CustomHook/>}/>

  </>

 )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
