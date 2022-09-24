import React from "react";
import ReactDOM from 'react-dom/client';
// import { ReactDOM } from "react";

const element = <h1>Hello world</h1>
console.log(element);
const root = ReactDOM.createRoot(document.getElementById('root'));
// ReactDOM.render(element, document.getElementById('root'));
root.render(
    <React.StrictMode>
        {element}
    </React.StrictMode>
)