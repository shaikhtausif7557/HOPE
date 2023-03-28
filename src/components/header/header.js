import '../../styles/header.css'
import Logo from '../../media/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LoginPage from "../login/login";
import ReactDOMServer from 'react-dom/server';
import "../login/login.css";

import React from 'react';



const header = () => {
  function handleLoginClick() {
    const loginWindow = window.open('', '_blank');
    loginWindow.document.write(ReactDOMServer.renderToString(<LoginPage/>));
  }
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
        <span className='navitem3' onClick={handleLoginClick}>LOGIN</span>
        <span className='navitem4'>SIGNUP</span>

        <PersonIcon />


      </div>


    </div>);
};
export default header;