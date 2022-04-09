import styled from "styled-components";

const Container = styled.div`
    background-color: #fff;
    height: 100vh;
    max-width: 100%;
    width: 100vw;
    display: flex;

    .homeContainer {
        flex: 5;
        background-color: ${(props) => props.theme.colors.primaryColor};
        margin: 20px;
        border-radius: 10px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        margin: 20px;

        h3 {
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 1px;
            color: ${(props) => props.theme.colors.textColor};
        }
    }
    button {
        display: flex;
        justify-content: flex;
        align-items: center;
        background-color: #fff;
        border: none;
        padding: 5px;
        border-radius: 5px;
        font-size: 12px;
        cursor: pointer;

        .btn {
            margin-left: 5px;
            font-size: 16px;
        }
    }

    .search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px;

        .searchInput {
            display: flex;
            align-items: center;
        }
        .btn {
            margin-right: -27px;
            z-index: 200;
            color: ${(props) => props.theme.colors.textColor};
            font-size: 22px;
        }
        input {
            width: 130px;
            border: none;
            padding: 10px;
            border-radius: 5px;

            &:focus {
                margin-left: 20px;
            }
        }
        .searchInput input::placeholder {
            text-align: center;
        }
        select {
            border: none;
            padding: 10px;
            border-radius: 5px;
        }
    }
`;

export { Container };
