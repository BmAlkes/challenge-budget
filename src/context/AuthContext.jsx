import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api, createSession } from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
            api.defaults.headers.Authorization = `Bearer ${token}`;
        }
        setLoading(false);
    }, []);

    // user === null
    // authenticated = false
    const login = async (email, password) => {
        // api cria uma session

        const response = await createSession(email, password);

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggedUser));
        localStorage.setItem("token", JSON.stringify(token));

        api.defaults.headers.Authorization = `Bearer ${token}`;
        navigate("/");
        setUser(loggedUser);
    };
    const logout = () => {
        localStorage.removeItem("user");
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login/register");
    };

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, login, logout, loading }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
