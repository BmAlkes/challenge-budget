import React from "react";
import Table from "../Table";
import { Container } from "./extract";
import { useTransaction } from "../../context/TransactionContext";

const Extract = () => {
    const { transactions, setTransactions } = useTransaction();

    return (
        <Container>
            <div className="list">
                <h3>Title</h3>
                <h3>Categories</h3>
                <h3>Value</h3>
                <h3>Date</h3>
            </div>
            <Table transactions={transactions} />
            <p>See more → </p>
        </Container>
    );
};

export default Extract;
