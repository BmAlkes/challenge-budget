import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar/index";
import { Container } from "./styles";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Transactions from "../../components/Transactions";
import { Link } from "react-router-dom";
import { useTransaction } from "../../context/TransactionContext";

const Transaction = () => {
    const [filtered, setFiltered] = useState("");
    const { transactions, filteredTransactions } = useTransaction();

    useEffect(() => {
        filteredTransactions(filtered);
    }, [filtered]);

    return (
        <Container>
            <SideBar />
            <div className="homeContainer">
                <div className="header">
                    <h3>Transactions</h3>
                    <Link to="/createTransaction">
                        <button>
                            New Transaction
                            <AddBoxOutlinedIcon className="btn" />
                        </button>
                    </Link>
                </div>
                <div className="search">
                    <div className="searchInput">
                        <SearchOutlinedIcon className="btn" />
                        <input
                            type="text"
                            id="placeholder"
                            placeholder="Transactions"
                        />
                    </div>
                    <select
                        name="Categories"
                        id="Categories"
                        onChange={(e) => {
                            setFiltered(e.target.value);
                        }}
                    >
                        <option value="">Categories</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Food">Food</option>
                        <option value="Paycheck">PayCheck</option>
                        <option value="Car">Car</option>
                        <option value="Relax">Relax</option>
                        <option value="Study">Study</option>
                    </select>
                </div>
                <Transactions transactions={transactions} />
            </div>
        </Container>
    );
};

export default Transaction;
