import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 0 2rem;

    .body {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 800px;
        width: 100%;
        border-radius: 60px;
    }
    .welcome {
        background-color: rgba(0, 204, 255, 0.5);
        flex: 1;
        height: 450px;
        border-radius: 10px 0px 0px 10px;
        color: #fff;
        padding: 20px;

        h2 {
            font-weight: 700;
            margin-bottom: 60px;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        }
        h3 {
            font-size: 2.3rem;
            letter-spacing: 0.1rem;
            margin-bottom: 10px;
        }
        p {
            font-size: 1rem;
            padding: 20px 0px;
        }
    }

    .login {
        background-color: ${(props) => props.theme.colors.primaryColor};
        padding: 1rem;
        flex: 1;
        height: 450px;
        border-radius: 0px 10px 10px 0px;

        h2 {
            color: rgba(0, 204, 255, 0.9);
            margin-bottom: 0px;
        }
        p {
            color: gray;
            font-size: 0.7rem;
        }
    }

    .form {
        width: 100%;
        max-width: 480px;
        padding: 0.5rem;
        margin-top: 2rem;

        .field {
            margin-bottom: 1.4rem;
        }

        .field label {
            display: block;
            font-size: 12px;
            font-weight: 100;
            color: gray;
            margin-bottom: 0.1rem;
        }
        .field input {
            width: 90%;
            padding: 0.3rem;
            border: 1px solid gray;
            border-radius: 5px;
        }
        button {
            background-color: rgba(0, 204, 255, 0.9);
            width: 90%;
            border: none;
            padding: 5px;
            font-weight: 700;
            color: #f1f1f1;
            border-radius: 5px;
        }
    }
    .or p {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .span {
        text-align: center;
        color: gray;
    }
    .span::before,
    .span::after {
        content: "";
        width: 60px;
        height: 1px;
        display: inline-block;
        background-color: gray;
    }
    .span::before {
        margin-right: 10px;
    }
    .span::after {
        margin-left: 10px;
    }
    .socialMedia {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .facebook {
            font-size: 2.4rem;
            color: blue;
            cursor: pointer;
        }
        .google {
            font-size: 2.4rem;
            color: blue;
            cursor: pointer;
        }
    }
    .signin {
        display: flex;
        flex: 1;
        align-items: flex-end;
        justify-content: space-between;
        height: 80px;

        a {
            color: gray;
            text-decoration: underline;
        }
        a:hover {
            color: rgba(0, 204, 255, 0.9);
        }
    }
`;

export { Container };
