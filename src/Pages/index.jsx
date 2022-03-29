import React from "react";
import Sidebar from "../components/SideBar";
import Wraper from "../components/Wrapper";
import { Container } from "./styles";

const Home = () => {
    return (
        <Container>
            <Sidebar />
            <Wraper />
        </Container>
    );
};

export default Home;
