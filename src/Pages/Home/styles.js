import styled from "styled-components";

const Container = styled.div`
    display: flex;
    @media (max-width: 700px) {
        flex-direction: column;
    }

    .homeContainer {
        max-width: 950px;
        flex: 8;
        background-color: ${(props) => props.theme.colors.primaryColor};
        margin: 20px;
        border-radius: 10px;
        max-height: 100%;

        .widgets {
            display: flex;
            padding: 20px;
            gap: 20px;
        }

        h1 {
            font-size: 28px;
            letter-spacing: 2px;
            margin: 20px;
            padding: 10px;
            font-weight: 500;
            color: ${(props) => props.theme.colors.headeling};
        }
    }
    @media (max-width: 700px) {
        .homeContainer {
            flex: 1;
        }
        .widgets {
            flex-direction: column;
        }
    }
`;

export { Container };
