import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);

  const handleAbrirClick = () => {
    setNavVisible(true);
  };

  const handleCerrarClick = () => {
    setNavVisible(false);
  };

  return (
    <>
      <header className='header'>
      <nav id='nav' className={navVisible ? 'visible' : ''}>
        <div className="cerrar">
          <button onClick={handleCerrarClick}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <ul id='ul-n' >
          <li className='li-1-n'><NavLink className='a-1-n' to={'/'}>Home</NavLink></li>
          <li className='li-1-n'><NavLink className='a-1-n' to={'/about'}>About us</NavLink></li>
          <li className='li-1-n'><NavLink className='a-1-n' to={'/games'}>Video Games</NavLink></li>
          <li className='li-1-n'><NavLink className='a-1-n' to={'/devs'}>Developers</NavLink></li>
        </ul>
      </nav>
      <div className="bars-cont" id="abrir" onClick={handleAbrirClick}>
          <i className="fa-solid fa-bars"></i>
      </div>
      </header>
    </>
  );
};

