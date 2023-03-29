import '../../styles/header.css'
import Logo from '../../media/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate } from 'react-router-dom';
import React from 'react';



const Header = () => {
  const navigate = useNavigate()
  return (
    
    <div className='header'>
      <div className='header__logo'>
        <img src={Logo} alt='logo'></img>
        <span>HOPE</span>
      </div>
      <div className='icons'>

        <SearchIcon />
        <span className='navitems'>ZAKAT CALCULATOR</span>
        <span className='navitems'>ABOUT US</span>
        <span className='navitems'>HOW IT WORKS</span>
        <span className='navitem3' onClick={() => {
      navigate('/login');
    }}>LOGIN</span>
        <span className='navitem4' onClick={() => {
      navigate('/signup');
    }}>SIGNUP</span>

        <PersonIcon />


      </div>


    </div>);
};
export default Header;