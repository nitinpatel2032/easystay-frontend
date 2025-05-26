import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Environment from "./Environment.js"
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from '../src/context/UserContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(Environment.google_auth_id)
root.render(
  <GoogleOAuthProvider clientId={Environment.google_auth_id}>
    <UserProvider>
      <App />
    </UserProvider>
  </GoogleOAuthProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();