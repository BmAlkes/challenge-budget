import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Container } from "./styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const LoginPage = () => {
    const { authenticated, login } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("submit", { email, password });
        login(email, password);
    };

    return (
        <Container>
            <div className="body">
                <div className="welcome">
                    <h2>Smart Wallet</h2>
                    <h3> Welcome To...</h3>
                    <p>
                        Welcome to Smart Wallet, the easy way to controll your
                        finances
                    </p>
                </div>
                <div className="login">
                    <h2>Login </h2>
                    <p>Welcome! login to acess your smart accouting</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button>Login</button>
                    </form>
                    <div className="or">
                        <p className="span">Or</p>
                    </div>
                    <div className="socialMedia">
                        <FacebookIcon className="facebook" />
                        <GoogleIcon className="google" />
                    </div>
                    <div className="signin">
                        <p>
                            New User? <Link to="/login/register">Sign up</Link>
                        </p>
                        <p>forgot password ?</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default LoginPage;
