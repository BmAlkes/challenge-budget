import styled from "styled-components";
import { keyframes } from "styled-components";

const Sidebar = styled.aside`
    height: 100vh;
    max-width: 250px;
    width: 150px;
    margin: 20px 10px;
    display: flex;
    flex-direction: column;
    opacity: 0;
    animation: Move 3s forwards;
    margin-left: -30px;
    box-sizing: border-box;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
    flex-direction: column;
    padding: 10px;
    &.flex {
        flex-direction: row;
    }
`;
const Img = styled.img`
    max-width: 100%;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 20px 10px 20px 20px;
`;
const Span = styled.span`
    color: ${(props) => props.theme.colors.headeling};
    font-size: 18px;
`;

const Container2 = styled.div`
    display: flex;
    flex-direction: column;

    & .nav {
        margin: 10px;
        padding: 10px;
    }

    & .nav:hover {
        background-color: ${(props) => props.theme.colors.primaryColor};
    }

    & div {
        display: flex;
        align-items: center;
        margin: 20px 10px;
        cursor: pointer;
    }
    & a {
        font-size: 12px;
        margin-left: 10px;
        font-weight: 200;
    }
`;

export { Sidebar, Container, Img, Span, Container2 };
