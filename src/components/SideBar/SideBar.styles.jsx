import styled from "styled-components";

const Sidebar = styled.aside`
    width: 300px;
    max-width: 30vw;
    background-color: ${(props) => props.theme.colors.primaryColor};
    margin: 20px 10px;
`;

const Container = styled.p``;
const Img = styled.img``;

export { Sidebar, Container, Img };
