import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import { App } from './App.jsx'
import { Login } from './components/Login/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
