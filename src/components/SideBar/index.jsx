import React from "react";
import { Sidebar, Container, Img, Span, Container2 } from "./styles";
import { Link } from "react-router-dom";
import {
    MdOutlineHome,
    MdPersonOutline,
    MdOutlineLogout,
    MdOutlineSettings,
} from "react-icons/md";

const SideBar = () => {
    return (
        <Sidebar>
            <Container className="flex">
                <Img
                    src={
                        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                    }
                />
                <Span>Bruno</Span>
            </Container>
            <Container2>
                <div className="nav">
                    <MdOutlineHome color={"#7D80A3"} />
                    <Link to="/">Home</Link>
                </div>
                <div className="nav">
                    <MdPersonOutline color={"#7D80A3"} />
                    <Link to="/transaction"> Transactions</Link>
                </div>
                <div className="nav">
                    <MdOutlineLogout color={"#7D80A3"} />
                    <Link to="">Log Out</Link>
                </div>
                <div className="nav">
                    <MdOutlineSettings color={"#7D80A3"} />
                    <Link to="">Configuration</Link>
                </div>
            </Container2>
        </Sidebar>
    );
};

export default SideBar;
