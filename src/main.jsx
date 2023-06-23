import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from './App.jsx'
import { Login } from './components/Login/Login.jsx';
import { AuthGoogleProvider } from './contexts/AuthGoogleProvider.jsx';
import { PrivateRoutes } from './PrivateRoutes.jsx';
import { CreateOrHunt } from './components/CreateOrHunt/CreateOrHunt.jsx';
import { MyHunts } from './components/MyHunts/MyHunts.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthGoogleProvider>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="home" element={<App />}>
              <Route index element={<CreateOrHunt />} />
              <Route path={"my-hunts"} element={<MyHunts />} />
            </Route>
          </Route>
        </Routes>
      </AuthGoogleProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
