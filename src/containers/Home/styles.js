import styled from "styled-components";

export const Background = styled.div`
    background-image: url(${props => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
    }
`
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1500px;
`
export const Poster = styled.div`
    z-index: 2;
    img {
        width: 400px;
        border-radius: 30px;
    }
`

export const Info = styled.div`
    z-index: 2;
    padding: 20px;
    width: 50%;
    h1 {
        font-size: 48px;
        color: #ffffff;
        font-weight: 700;
        text-align: center;
    }
    p {
        font-style: 28px;
        color: #ffffff;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 20px;
    }

`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
`
