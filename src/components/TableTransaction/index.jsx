import React from "react";
import { Container } from "./styles";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const TableTransaction = ({ transactions, deleteTransaction }) => {
    const deleteItem = async (id) => {
        console.log(id);
        deleteTransaction(id);
    };

    return (
        <Container>
            {transactions.map((transaction) => (
                <div className="table" key={transaction.id}>
                    <span>
                        <LocalCafeIcon className="icon" />
                        {transaction.title}
                    </span>
                    <span>{transaction.category}</span>
                    <span className="amount">{transaction.amount}</span>
                    <span>05/04/2022</span>
                    <div className="actions">
                        <span onClick={() => deleteItem(transaction.id)}>
                            <DeleteOutlineOutlinedIcon />
                        </span>
                        <span>
                            <Link to={`/transaction/edit/${transaction.id}`}>
                                <EditIcon params={transaction.id} />
                            </Link>
                        </span>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default TableTransaction;
