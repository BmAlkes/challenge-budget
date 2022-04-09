import React from "react";
import SideBar from "../../components/Sidebar";
import { Container } from "./styles";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Transactions from "../../components/Transactions";
import { Link } from "react-router-dom";

const Transaction = () => {
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
                    <select name="Categories" id="Categories">
                        <option value="categories" disabled>
                            Categories
                        </option>
                        <option value="food">Food</option>
                        <option value="food">Food</option>
                        <option value="food">Study</option>
                        <option value="food">PayCheck</option>
                        <option value="food">Fun</option>
                    </select>
                </div>
                <Transactions />
            </div>
        </Container>
    );
};

export default Transaction;
