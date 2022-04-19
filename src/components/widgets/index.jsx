import React from "react";
import { Container } from "./widgets";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Widgets = ({ type, statusCount }) => {
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
                total: `${statusCount.deposit}`,
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
                total: `${statusCount.witdraw}`,
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
                total: `${statusCount.total}`,
            };
        default:
            break;
    }
    return (
        <Container>
            <div className="left">
                <span className="types">{data.types}</span>
                <span className={`value ${data.type}`}>${data.total}</span>
            </div>
            <div className="right">
                <div className="simbol positive">{data.icon}</div>
            </div>
        </Container>
    );
};

export default Widgets;
