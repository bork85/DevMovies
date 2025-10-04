import styled, { css } from "styled-components";

const refButton = css`
    border: 3px solid #ffffff;
    background-color: transparent;
    color: #ffffff;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;

    &:hover {
        color: #ff0000;
        background-color: #ffffff;
    }
`

export const ButtonWhite = styled.button`
    ${refButton}
`
export const ButtonRed = styled.button`
    ${refButton}

    background-color: #ff0000;
    border: 3px solid transparent;
    box-shadow: 0 0 7px 8px rgb(255 0 0 / 30%);

    &:hover {
        box-shadow: 0 0 7px 15px rgb(255 0 0 / 30%);
        background-color: #ff0000;
        color: #ffffff;
    }
`