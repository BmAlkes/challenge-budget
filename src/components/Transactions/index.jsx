import React from "react";
import { Container } from "./styles";
import TableTransaction from "../../components/TableTransaction/index";
import { useTransaction } from "../../context/TransactionContext";

const Transactions = ({ transactions }) => {
    const { deleteTransaction } = useTransaction();
    return (
        <Container>
            <div className="list">
                <h3>Title</h3>
                <h3>Categories</h3>
                <h3>Value</h3>
                <h3>Date</h3>
                <h3>Actions</h3>
            </div>
            <TableTransaction
                deleteTransaction={deleteTransaction}
                transactions={transactions}
            />
        </Container>
    );
};

export default Transactions;
