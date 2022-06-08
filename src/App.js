import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Account from "./components/Account";
import {AuthContextProvider} from './context/AuthContext'
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase auth & context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/account' element={
          <ProtectedRoute><Account />
            </ProtectedRoute>}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
