import React, { useState } from "react";
import FacebookLoginBtn from "react-facebook-login";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Container } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ReactComponent as ReactFinance } from "../../images/finace.svg";

const RegisterPage = () => {
    const { createuser } = useAuth();
    const [name, setName] = useState(null);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password, name });
        createuser(name, email, password);
    };

    const facebook = () => {
        window.open("http://localhost:5000/auth/facebook", "_self");
    };

    return (
        <Container>
            <div className="panel">
                <h2>
                    Welcome <br />
                    to Easy Wallet
                </h2>
                <p>
                    Welcome to Smart Wallet, the easy way to controll your
                    finances
                </p>
                <ReactFinance className="img" />
            </div>
            <div className="forms-container " onSubmit={handleSubmit}>
                <div className="sigin-signup">
                    <form className="signin-in-form">
                        <h2 className="title">Sign Up</h2>
                        <div className="input-field">
                            <PersonIcon className="icons" />
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <PersonIcon className="icons" />
                            <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <LockOutlinedIcon className="icons" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn-solid"
                            value="Login"
                        />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default RegisterPage;
