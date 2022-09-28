import React, { useState } from "react";
import LoginPage from "./components/Pages/LoginPage";
import ForgotPasswordPage from "./components/Pages/ForgotPasswordPage";
import AccountsPage from "./components/Pages/AccountsPage";
import PageNotFound from "./components/Pages/PageNotFound";
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/recover" element={<ForgotPasswordPage />} />
                <Route path="/accounts" element={<AccountsPage />} />
                <Route path="/" element={auth ? <Navigate to={"/accounts"} /> : <Navigate to={"/login"} />} />
                <Route element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
