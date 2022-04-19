import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    flex: 1;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    border-radius: 10px;
    height: 100px;
    @media (max-width: 700px) {
        width: 250px;
        margin: 0 auto;
    }
    .left {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .types {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.total};
    }
    .value {
        text-align: center;
        font-size: 2rem;

        &.positive {
            color: ${(props) => props.theme.colors.positive};
        }

        &.negative {
            color: ${(props) => props.theme.colors.negative};
        }
        &.balance {
            color: #4e29ff;
        }
    }

    .simbol {
        color: ${(props) => props.theme.colors.total};
    }

    .icon {
        font-size: 1.7rem;
        border-radius: 10px;
    }
`;

export { Container };
