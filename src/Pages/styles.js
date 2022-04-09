import styled from "styled-components";

const Container = styled.div`
    display: flex;

    .homeContainer {
        flex: 5;
        background-color: ${(props) => props.theme.colors.primaryColor};
        margin: 20px;
        border-radius: 10px;

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
`;

export { Container };
