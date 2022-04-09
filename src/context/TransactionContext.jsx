import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const TransactionContext = createContext({});

export const TransactionProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]); // Estado principal da aplicação

    useEffect(() => {
        getTransactions();
    }, []);
    // create transaction
    // update deletransaction
    // delete transaction
    // get transactions
    const getTransactions = () => {
        api("/transactions")
            .then((response) => setTransactions(response.data))
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransaction = () => useContext(TransactionContext);
