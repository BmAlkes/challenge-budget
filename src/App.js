import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EditTransaction from "./Pages/EditTransaction";
import Home from "./Pages/Home";
import Transaction from "./Pages/Transaction/";
import CreateTransaction from "./Pages/CreateTransaction";
import LoginPage from "./Pages/Register";
import { AuthProvider, useAuth } from "./context/AuthContext";
import RegisterPage from "./Pages/Register";

const App = () => {
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

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route
                        exact
                        path="/login/register"
                        element={<LoginPage />}
                    />
                    {/* <Route path="/login/register" element={<RegisterPage />} /> */}
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
