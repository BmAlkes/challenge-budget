import styled from "styled-components";

const Container = styled.div`
    margin: 20px;
    margin-top: 60px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: inherit;

    .list {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 1px;
        color: ${(props) => props.theme.colors.textColor};
        margin: 10px;
        h3 {
            flex: 1;
        }
    }

    p {
        text-align: end;
        color: ${(props) => props.theme.colors.textColor};
    }
`;

export { Container };
