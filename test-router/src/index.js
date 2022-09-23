import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import {
  createBrowserRouter as Router,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './routes/root';
import Contact from './contact';
// import ErrorPage from './error-page';

const router = Router([
  {
    path: "/",
    element: <Root/>,
    // element: <ErrorPage/>
  },
  {
    path: "contacts/:contactId",
    element: <Contact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);