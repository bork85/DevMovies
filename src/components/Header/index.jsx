import { Link, useLocation } from 'react-router';
import LogoHeader from '../../assets/logo.png';
import { Container, ItemMenu, Menu } from './styles';
import { useState } from 'react';

function Header() {
    const [changeBG, setChangeBG] = useState(false);
    const {pathname} = useLocation();

    window.onscroll = () => {
        if(!changeBG && window.pageYOffset > 150){
            setChangeBG(true);
        }
        if(changeBG && window.pageYOffset <= 150){
            setChangeBG(false);
        }
    }
    return (
        <Container changebg={changeBG}>
            <img src={LogoHeader} alt='Logo-devmovies' />
            <Menu>
                <ItemMenu isactive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </ItemMenu>
                <ItemMenu isactive={pathname.includes('filmes')}>
                    <Link to='/filmes'>Filmes</Link>
                </ItemMenu>
                <ItemMenu isactive={pathname.includes('series')}>
                    <Link to='/series'>Séries</Link>
                </ItemMenu>
            </Menu>
        </Container>
    )
}
export default Header;