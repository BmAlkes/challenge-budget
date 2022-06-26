import styled from "styled-components";

const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .panel {
        position: relative;
        flex: 1;
        min-height: 100vh;
        display: flex;
    }
    .blue {
        position: absolute;
        height: 100%;
        width: 100vw;
        right: -30%;
        background-image: linear-gradient(-45deg, #02bae8 0%, #025fe8 100%);
        transform: translateX(-75%);
        transform: translateY(-10px);
        border-radius: 50%;
        opacity: 0.8;
    }

    @media (max-width: 700px) {
        flex-direction: column;
        margin-bottom: 20px;
        flex-direction: column-reverse;
        .blue {
            left: 0;
            height: 90%;
            width: 100%;
            margin-bottom: 0px;
        }
    }
    .panel-container {
        z-index: 1;
        margin-top: 30px;

        h2 {
            font-size: 4rem;
            color: #fff;
            margin: 30px;
            letter-spacing: 0.3px;
            text-shadow: 3px 3px 3px rgb(0, 0, 0);
        }
        p {
            font-size: 1.5rem;
            letter-spacing: 1.4px;
            font-weight: 500;
            padding: 20px;
            margin: 20px;
            color: #fff;
            margin-bottom: 100px;
        }
        .img {
            max-width: 100%;
            margin-left: 30px;
        }
        @media (max-width: 700px) {
            h2 {
                text-align: center;
                font-size: 2.7rem;
            }
            p {
                font-size: 1.3rem;
                margin: 0;
                padding: 10px;
                text-shadow: 3px 3px 3px rgb(0, 0, 0);
                text-align: center;
            }
        }
    }
    .forms-container {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    @media (max-width: 700px) {
        .forms-container {
            margin-bottom: 2rem;
        }
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
