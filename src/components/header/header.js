import '../../styles/header.css'
import Logo from '../../media/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';


const header = () => {
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
        <span className='navitem3'>LOGIN</span>
        <span className='navitem4'>SIGNUP</span>

        <PersonIcon />


      </div>


    </div>);
};
export default header;