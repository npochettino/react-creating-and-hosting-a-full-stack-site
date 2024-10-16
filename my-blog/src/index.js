import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7zZovaVBon8hKkuRWAyzz_L6MwXauQrs",
  authDomain: "my-react-blog-9a1c5.firebaseapp.com",
  projectId: "my-react-blog-9a1c5",
  storageBucket: "my-react-blog-9a1c5.appspot.com",
  messagingSenderId: "125512458100",
  appId: "1:125512458100:web:d715a5e702659c9c3b5621"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
