import React, { useState } from "react";
import SideBar from "../../components/Sidebar";
import { Container } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useTransaction } from "../../context/TransactionContext";
import { useAuth } from "../../context/AuthContext";

const CreateTransaction = () => {
    const navigate = useNavigate();
    const { createTransaction } = useTransaction();
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");

    const { user } = useAuth();
    const { _id } = user;

    const handleSubmit = (event) => {
        event.preventDefault();
        createTransaction({ title, amount, category, type, created_by: _id });
        navigate("/");
    };

    return (
        <Container>
            <SideBar />
            <div className="homeContainer">
                <h3>Create Transaction</h3>
                <div className="list">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Title</label>
                            <input
                                type="text"
                                placeholder="Ex: Pizza
                        "
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="">Value</label>
                            <input
                                type="text"
                                placeholder="Ex: 1000
                        "
                                onChange={(event) =>
                                    setAmount(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="">Categorie</label>
                            <select
                                onChange={(event) =>
                                    setCategory(event.target.value)
                                }
                            >
                                <option value="">Choose one</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Food">Food</option>
                                <option value="Paycheck">Paycheck</option>
                                <option value="Car">Car</option>
                                <option value="Relax">Relax</option>
                                <option value="Study">Study</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Type</label>
                            <select
                                onChange={(event) =>
                                    setType(event.target.value)
                                }
                            >
                                <option value="">Choose one</option>
                                <option value="out">Paid</option>
                                <option value="in">Receive</option>
                            </select>
                        </div>
                        <Link to="/">
                            <button className="Cancel">Cancel</button>
                        </Link>
                        <button className="Confirm">Confirm</button>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default CreateTransaction;
