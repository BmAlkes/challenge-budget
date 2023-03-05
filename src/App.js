import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditTransaction from "./Pages/EditTransaction";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction/";
import CreateTransaction from "./Pages/CreateTransaction";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import { AuthProvider, useAuth } from "./context/AuthContext";

const Private = ({ children }) => {
    const { authenticated, loading } = useAuth();
    if (loading) {
        return <div className="loading">Loading...</div>;
    }
    if (!authenticated) {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
};

const App = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="/"
                        element={
                            <Private>
                                <Home />
                            </Private>
                        }
                    />
                    <Route
                        path="/transaction"
                        element={
                            <Private>
                                <Transaction />
                            </Private>
                        }
                    />
                    <Route
                        path="/createTransaction"
                        element={
                            <Private>
                                <CreateTransaction />
                            </Private>
                        }
                    />
                    <Route
                        path="transaction/edit/:id"
                        element={
                            <Private>
                                <EditTransaction />
                            </Private>
                        }
                    />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default App;
