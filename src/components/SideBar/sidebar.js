import styled from "styled-components";

const Container = styled.div`
    flex: 1.3;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: Move 3s forwards;
    margin-left: -80px;
    .top {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;

        img {
            max-width: 100%;
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
        span {
            color: ${(props) => props.theme.colors.textColor};
            font-size: 18px;
            font-weight: bold;
        }
    }

    .menu {
        padding-left: 10px;
    }

    .menu ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    .menu ul li {
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.colors.textColor};
        padding: 5px;
        font-size: 14px;

        &:hover {
            background-color: ${(props) => props.theme.colors.primaryColor};
            border-radius: 5px;
            color: ${(props) => props.theme.colors.total};
        }
    }

    .menu ul span {
        margin-left: 10px;
    }
`;

export { Container };
