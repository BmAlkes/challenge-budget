import styled from "styled-components";

const Container = styled.div`
    max-width: 980px;
    position: flex;
    width: 100vw;
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;

    @media (max-width: 500px) {
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(-45deg, #02bae8 0%, #025fe8 100%);

        .panel {
            top: 0px;
            left: 60px;
        }

        p,
        .img {
            display: none;
        }
    }
    :before {
        content: " ";
        position: absolute;
        height: 100%;
        width: 100vw;
        top: 0px;
        right: 48%;
        background-image: linear-gradient(-45deg, #02bae8 0%, #025fe8 100%);
        transform: translateX(-75%);
        transform: translateY(-10px);
        border-radius: 50%;
        z-index: 0;
    }

    .panel {
        position: absolute;
        padding: 10px;
        width: 500px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            margin-top: 30px;
            color: #fff;
            font-size: 3.4rem;
            font-weight: bold;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        }
        p {
            padding: 10px;
            color: #fff;
            font-size: 1.2rem;
        }
    }
    .img {
        max-width: 100%;
        width: 400px;
        margin: 0 auto;
    }

    .forms-container {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 5;
    }
    .sigin-signup {
        margin-right: 10%;
    }
    @media (max-width: 700px) {
        .sigin-signup {
            margin: 0 auto;
        }
    }

    form {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title {
        font-size: 2.2rem;
        color: #444;
        margin-bottom: 10px;
    }
    .input-field {
        max-width: 380px;
        width: 100%;
        height: 55px;
        background-color: #f0f0f0;
        margin: 10px 0;
        border-radius: 55px;
        display: grid;
        grid-template-columns: 15% 85%;
        padding: 0 0.4rem;
        position: relative;
    }
    .input-field {
        display: flex;
        align-items: center;
    }
    .icons {
        color: #acacac;
        font-size: 1.9rem;
    }
    .input-field input {
        background: none;
        outline: none;
        border: none;
        line-height: 1;
        font-weight: 600;
        font-size: 1rem;
        color: #333;
        margin-left: 10px;
    }
    .input-field input:placeholder-shown {
        color: #aaa;
        font-weight: 500;
    }
    .btn-solid {
        width: 150px;
        height: 50px;
        outline: none;
        border: none;
        background-color: #02bae8;
        border-radius: 48px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        margin: 10px 0;
        transition: all 0.5s;
        cursor: pointer;
    }

    .btn-solid:hover {
        background-color: #025fe8;
    }
    .social-text {
        padding: 0.7rem 0;
    }
    .social-media {
        display: flex;
        justify-content: center;
    }
    .social-icon {
        height: 46px;
        width: 46px;
        border: 1px solid #333;
        margin: 0 0.45rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 1.7rem;
        transition: all 0.5s ease;
    }
    .social-icon svg {
        font-size: 1.7rem;
    }
    .social-icon:hover {
        color: #025fe8;
        border-color: #025fe8;
    }
    .panels-container {
        z-index: 100;
    }
`;

export { Container };
