import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Container } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ReactComponent as ReactFinance } from "../../images/finace.svg";

const LoginPage = () => {
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <Container>
            <div className="panel">
                <div className="blue"></div>
                <div className="panel-container">
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
            </div>
            <div className="forms-container ">
                <div className="sigin-signup">
                    <form className="signin-in-form" onSubmit={handleSubmit}>
                        <h2 className="title">Sign In</h2>
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
                        <Link to="/register">
                            <input
                                type="submit"
                                className="btn-solid"
                                value="Sign Up"
                            />
                        </Link>
                        <p className="social-text">
                            Or Sign in with social platforms
                        </p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <FacebookOutlinedIcon />
                            </a>
                            <a href="#" className="social-icon">
                                <GoogleIcon />
                            </a>
                            <a href="#" className="social-icon">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default LoginPage;
