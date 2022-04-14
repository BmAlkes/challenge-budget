import styled from "styled-components";

const Container = styled.div`
    display: flex;
    .homeContainer {
        flex: 5;
        background-color: ${(props) => props.theme.colors.primaryColor};
        margin: 20px;
        border-radius: 10px;
    }
    h3 {
        margin: 20px;
        color: ${(props) => props.theme.colors.textColor};
        font-weight: 300;
        letter-spacing: 1.5px;
        padding: 5px;
    }

    form {
        max-width: 400px;
        margin: 20px;
        display: grid;
        gap: 20px;
        grid-template-columns: 1fr 1fr;
        label {
            display: block;
            margin-bottom: 10px;
            color: ${(props) => props.theme.colors.textColor};
        }
        input {
            border: none;
            padding: 10px;
            border-radius: 5px;
        }
        select {
            width: 100%;
            border: none;
            padding: 10px;
            border-radius: 5px;
            color: ${(props) => props.theme.colors.textColor};
        }
    }

    button {
        border: none;
        padding: 6px;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        &.Cancel {
            background-color: ${(props) => props.theme.colors.negative};
            width: 100%;
        }
        &.Confirm {
            background-color: ${(props) => props.theme.colors.positive};
        }
    }
`;

export { Container };