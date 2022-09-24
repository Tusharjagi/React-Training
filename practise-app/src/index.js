import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageOne from './router/pageOne';
// import PageTwo from './router/pageTwo';
// import UseEffectPrac from './useEffect';
// import UsePrac from './useEffect/useEffect_1';
// import App from './App';
import {
  createBrowserRouter as Router,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = Router([
  {
    path: "/",
    element: <PageOne/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
    {/* <UseEffectPrac/> */}
    {/* <UsePrac/> */}
    {/* <PageOne/> */}
    {/* <PageTwo/> */}
  </React.StrictMode>
);

