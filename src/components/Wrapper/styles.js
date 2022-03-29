import styled from "styled-components";

const Wrapper = styled.div`
    background-color: ${(props) => props.theme.colors.primaryColor};
    width: 80%;
    border-radius: 15px;
`;
const H1 = styled.h1``;

export { Wrapper, H1 };
