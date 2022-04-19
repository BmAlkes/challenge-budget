import styled from "styled-components";

const Container = styled.div`
    background-color: #fff;
    height: 100vh;
    max-width: 100%;
    width: 100vw;
    display: flex;
    @media (max-width: 700px) {
        flex-direction: column;
    }

    .homeContainer {
        flex: 5;
        background-color: ${(props) => props.theme.colors.primaryColor};
        margin: 20px;
        border-radius: 10px;

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
            @media (max-width: 700px) {
                grid-template-columns: 1fr;
            }
            label {
                display: block;
                margin-bottom: 10px;
                color: ${(props) => props.theme.colors.textColor};
            }
            input {
                border: none;
                padding: 10px;
                border-radius: 5px;
                @media (max-width: 700px) {
                    width: 100%;
                }
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
            @media (max-width: 700px) {
                display: block;
            }
        }
    }
`;

export { Container };
