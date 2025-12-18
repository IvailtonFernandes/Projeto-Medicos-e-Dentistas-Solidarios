import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './header.module.scss';
import Logo from '../../assets/logo.png';

const Header = () => {
  
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className={s.header}>
      <div className={s.BoxLogo}>
        <img src={Logo} alt="Imagem de logo do site Médicos Voluntários" />
        <Link to='/'>Médicos & Dentistas</Link>
      </div>

      {}
      <div className={s.menuIcon} onClick={toggleMenu}>
        <div className={menuAberto ? s.bar1 : ''}></div>
        <div className={menuAberto ? s.bar2 : ''}></div>
        <div className={menuAberto ? s.bar3 : ''}></div>
      </div>

      {}
      <nav className={menuAberto ? s.navActive : ''}>
        <Link to='/' onClick={() => setMenuAberto(false)}>Home</Link>
        <Link to='/voluntario' onClick={() => setMenuAberto(false)}>Seja Voluntário</Link>
      </nav>
    </header>
  );
}

export default Header;