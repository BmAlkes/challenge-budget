import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditTransaction from "./Pages/EditTransaction/EditTransaction";
import Home from "./Pages";
import Transaction from "./Pages/Transaction/Transaction";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/transaction" element={<Transaction />} />
                <Route
                    path="transaction/edit/:id"
                    element={<EditTransaction />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
