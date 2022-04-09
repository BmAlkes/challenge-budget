import styled from "styled-components";

const Container = styled.div`
    margin: 20px;
    margin: 0 auto;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: inherit;
    width: 500px;

    .list {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 1px;
        color: ${(props) => props.theme.colors.textColor};
        margin-bottom: 10px;
        h3 {
            flex: 1;
            text-align: center;
        }
    }

    p {
        text-align: end;
        color: ${(props) => props.theme.colors.textColor};
    }
`;

export { Container };
