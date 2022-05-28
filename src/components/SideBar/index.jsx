import React from "react";
import { Container } from "./sidebar";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SideBar = () => {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <Container>
            <div className="top">
                <img
                    src="https://images.unsplash.com/photo-1640951613773-54706e06851d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                    alt=""
                />
                <span> Bmalkes</span>
            </div>
            <div className="menu">
                <ul>
                    <Link to="/">
                        <li>
                            <HomeIcon />
                            <span>Home</span>
                        </li>
                    </Link>
                    <Link to="/transaction">
                        <li>
                            <PersonIcon />
                            <span>Transaction</span>
                        </li>
                    </Link>
                    <Link to="/">
                        <li onClick={() => handleLogout()}>
                            <LogoutIcon />
                            <span>Logout</span>
                        </li>
                    </Link>
                    <li>
                        <SettingsIcon />
                        <span>Configuration</span>
                    </li>
                </ul>
            </div>
        </Container>
    );
};

export default SideBar;
