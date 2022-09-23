import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PageOne from './router/pageOne';
import PageTwo from './router/pageTwo';
// import UseEffectPrac from './useEffect';
// import UsePrac from './useEffect/useEffect_1';
// import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Router>
        <Switch>
        <Route exact path="/" component={PageOne} />
        <Route path="/pageTwo" component={PageTwo}/>
        <Redirect to="/"/>
        </Switch>
      </Router>
    </>
    {/* <App /> */}
    {/* <UseEffectPrac/> */}
    {/* <UsePrac/> */}
    {/* <PageOne/> */}
    {/* <PageTwo/> */}
  </React.StrictMode>
);

