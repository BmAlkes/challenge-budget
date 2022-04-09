import React from "react";
import SideBar from "../../components/Sidebar";
import { Container } from "./create";
import { Link } from "react-router-dom";

const CreateTransaction = () => {
    return (
        <Container>
            <SideBar />
            <div className="homeContainer">
                <h3>Create Transaction</h3>
                <div className="list">
                    <form>
                        <div>
                            <label htmlFor="">Title</label>
                            <input
                                type="text"
                                placeholder="Ex: Pizza
                        "
                            />
                        </div>
                        <div>
                            <label htmlFor="">Value</label>
                            <input
                                type="text"
                                placeholder="Ex: 1000
                        "
                            />
                        </div>
                        <div>
                            <label htmlFor="">Categorie</label>
                            <select>
                                <option value="" disabled>
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
                            <select>
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

export default CreateTransaction;
