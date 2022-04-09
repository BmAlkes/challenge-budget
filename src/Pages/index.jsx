import React from "react";
import { Container } from "./styles";
import SideBar from "../components/Sidebar/index";
import Widgets from "../components/widgets";
import Extract from "../components/Extract";

const Home = () => {
    return (
        <Container>
            <SideBar />
            <div className="homeContainer">
                <h1>Welcome Back, Bmalkes</h1>
                <div className="widgets">
                    <Widgets type="Entrace" />
                    <Widgets type="Withdraw" />
                    <Widgets type="balance" />
                </div>
                <div className="extract">
                    <Extract />
                </div>
            </div>
        </Container>
    );
};

export default Home;
