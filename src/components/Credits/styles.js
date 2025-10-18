import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        color: #ffffff;
        font-size: 14px;
        text-align: center;
    }

    img {
        height: 200px;
        border-radius: 5px;
    }
`

export const Title = styled.h4`
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
`