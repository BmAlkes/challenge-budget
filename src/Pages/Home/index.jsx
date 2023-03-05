import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import SideBar from "../../components/sidebar";
import Widgets from "../../components/widgets";
import Extract from "../../components/Extract";
import { useTransaction } from "../../context/TransactionContext";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
    const { user } = useAuth();
    console.log(user);
    const { _id } = user;
    const { getTransactions, transactions } = useTransaction();
    const [statusCount, setStatusCount] = useState({
        total: 0,
        witdraw: 0,
        deposit: 0,
    });

    const total = transactions
        .filter((transaction) => {
            if (transaction.type === "in") {
                return transaction;
            }
        })
        .reduce((acc, transaction) => {
            return acc + Number(transaction.amount);
        }, 0);

    const withdraw = transactions
        .filter((transaction) => {
            if (transaction.type === "out") {
                return transaction;
            }
        })
        .reduce((acc, transaction) => {
            return acc + Number(transaction.amount);
        }, 0);

    const balance = total - withdraw;

    useEffect(() => {
        getTransactions(_id);
    }, []);

    useEffect(() => {
        setStatusCount({
            total: balance,
            witdraw: withdraw,
            deposit: total,
        });
    }, [transactions]);

    return (
        <Container>
            <SideBar />
            <div className="homeContainer">
                <h1>Welcome Back, {user.name}</h1>
                <div className="widgets">
                    <Widgets type="Entrace" statusCount={statusCount} />
                    <Widgets type="Withdraw" statusCount={statusCount} />
                    <Widgets type="balance" statusCount={statusCount} />
                </div>
                <div className="extract">
                    <Extract />
                </div>
            </div>
        </Container>
    );
};

export default Home;
