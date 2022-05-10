import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const TransactionContext = createContext({});

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]); // Estado principal da aplicação

    useEffect(() => {
        getTransactions();
    }, []);
    // create transaction
    const createTransaction = async (transaction) => {
        const response = await api.post(`/transactions`, transaction);
        setTransactions([...transactions, response.data]);
    };

    // get transactions
    const getTransactions = async () => {
        await api("/transactions")
            .then((response) => setTransactions(response.data))
            .catch((error) => {
                console.log(error);
            });
    };

    // update deletransaction
    const editTransaction = async (id, updateTransaction) => {
        await api.patch(`/transactions/${id}`, updateTransaction);
        setTransactions(
            transactions.map((transaction) =>
                transaction._id === transaction.id
                    ? { ...transaction, ...updateTransaction }
                    : transaction
            )
        );
    };
    // delete transaction
    const deleteTransaction = async (id) => {
        await api.delete(`/transactions/${id}`);
        setTransactions(
            transactions.filter((transaction) => transaction.id !== id)
        );
    };
    const filteredTransactions = async (filtered) => {
        await api.get(`/transactions`);
        const filter = transactions.filter(
            (transaction) => transaction.category === filtered
        );
        if (filter.length === 0) {
            getTransactions();
        } else {
            setTransactions(filter);
        }
    };

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                deleteTransaction,
                editTransaction,
                getTransactions,
                createTransaction,
                filteredTransactions,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransaction = () => useContext(TransactionContext);
