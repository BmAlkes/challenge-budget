import React, { useEffect, useState } from "react";
import SideBar from "../../components/Sidebar";
import { Container } from "./Edit";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useTransaction } from "../../context/TransactionContext";
import { api } from "../../services/api";

const EditTransaction = () => {
    const { editTransaction, getTransactions } = useTransaction();
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState(" ");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState(" ");
    const [type, setType] = useState(" ");

    useEffect(() => {
        api.get(`/transactions/${id}`).then((response) => {
            setTitle(response.data.title);
            setCategory(response.data.category);
            setAmount(response.data.amount);
            setType(response.data.type);
        });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await editTransaction(id, { title, amount, type, category });
        navigate("/");
    };

    return (
        <Container>
            <SideBar />
            <div className="homeContainer">
                <h3>Edit Transaction</h3>

                <div className="list">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Title</label>
                            <input
                                type="text"
                                placeholder={`${title}`}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label htmlFor="">Value</label>
                            <input
                                type="text"
                                placeholder={`${amount}`}
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
                                <option value={`${category}`} disabled>
                                    Choose one
                                </option>
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
                            <select onChange={(e) => setType(e.target.value)}>
                                <option value="In">Receive</option>
                                <option value="out">Paid</option>
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

export default EditTransaction;
