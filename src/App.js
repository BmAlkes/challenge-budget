import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditTransaction from "./Pages/EditTransaction";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction/";
import CreateTransaction from "./Pages/CreateTransaction";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import { AuthProvider, useAuth } from "./context/AuthContext";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route
                    path="/createTransaction"
                    element={<CreateTransaction />}
                />
                <Route
                    path="transaction/edit/:id"
                    element={<EditTransaction />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
