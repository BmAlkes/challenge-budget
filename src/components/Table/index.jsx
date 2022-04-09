import React from "react";
import { Container } from "./styles";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";

const Table = ({ transactions }) => {
    return (
        <Container>
            {transactions.map(
                (transaction) =>
                    (transaction.length = 3 ? (
                        <div className="table" key={transaction.id}>
                            <span>
                                <LocalCafeIcon className="icon" />
                                {transaction.title}
                            </span>
                            <span>{transaction.category}</span>
                            <span className="amount">{transaction.amount}</span>
                            <span>05/04/2022</span>
                        </div>
                    ) : (
                        ""
                    ))
            )}
        </Container>
    );
};

export default Table;
