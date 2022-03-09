import React from "react";
import { Sidebar, Container } from "./SideBar.styles";

const SideBar = () => {
    return (
        <Sidebar>
            <Container>
                hello
                <Img
                    src={
                        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                    }
                />
            </Container>
        </Sidebar>
    );
};

export default SideBar;
