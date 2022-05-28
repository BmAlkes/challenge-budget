import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin: 0 auto;

    .table {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        background-color: #fff;
        padding: 10px;
        color: ${(props) => props.theme.colors.textColor};
        .icon {
            font-size: 18px;
            margin-right: 10px;
        }

        span {
            flex: 1;
            font-size: 12px;
            display: flex;
            align-items: center;
        }

        .actions {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            & span {
                margin-right: 10px;
            }
        }
    }
`;

export { Container };
