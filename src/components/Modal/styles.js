import styled from "styled-components";

export const Background = styled.div`
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    z-index: 999;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Container = styled.div`
    background-color: #000000;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    position: fixed;
    padding: 20px 50px 50px 50px;
    border-radius: 10px;
    

    p {
        color: #ff0000;
        cursor: pointer;
        margin-bottom: 10px;
        font-size: 12px;
    }

    iframe {
        border: none;
        border-radius: 10px;
    }
`