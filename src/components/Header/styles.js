import styled from "styled-components";

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => (props.changebg ? "#000000" : "transparent")};
    transition: background-color 0.5s ease-in-out;

    img {
        width: 20%;
        min-width: 180px;
        padding: 10px 20px;
    }
`
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 30px;
    padding: 0 20px;
`
export const ItemMenu = styled.li`
    font-weight: 600;
    cursor: pointer;
    position: relative;
    
    a {
        text-decoration: none;
        color: ${props => (props.isactive ? "#189b20" : "#FFFFFF")};
        font-size: 18px;
        font-weight: ${props => (props.isactive ? "600" : "500")};
    }

    &::after {
        content: '';
        height: 3px;
        width: ${props => (props.isactive ? '100%' : 0)};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        transition: width 0.5s ease-in-out;
        left: 50%;
        transform: translateX(-50%);
        z-index: 99;
    }
    &:hover::after {
        width: 100%;
    }
`
