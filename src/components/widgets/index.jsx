import React from "react";
import { Container } from "./widgets";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Widgets = ({ type }) => {
    let data;

    switch (type) {
        case "Entrace":
            data = {
                types: "Receive",
                type: "positive",
                icon: (
                    <ArrowCircleUpIcon
                        className="icon"
                        style={{ color: "green" }}
                    />
                ),
            };
            break;
        case "Withdraw":
            data = {
                types: "Withdraw",
                type: "negative",
                icon: (
                    <ArrowCircleDownIcon
                        className="icon"
                        style={{ color: "crimson" }}
                    />
                ),
            };
            break;
        case "balance":
            data = {
                types: "Balance",
                type: "balance",
                icon: (
                    <ArrowCircleUpIcon
                        className="icon"
                        style={{ color: "#4e29ff" }}
                    />
                ),
            };
        default:
            break;
    }
    return (
        <Container>
            <div className="left">
                <span className="types">{data.types}</span>
                <span className={`value ${data.type}`}>$ 300</span>
            </div>
            <div className="right">
                <div className="simbol positive">{data.icon}</div>
            </div>
        </Container>
    );
};

export default Widgets;
