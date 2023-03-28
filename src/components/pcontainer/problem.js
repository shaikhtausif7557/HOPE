import '../../styles/problem.css'
import React from 'react'
import Button from '@mui/material/Button';
import { hover } from '@testing-library/user-event/dist/hover';
const OpenGoogleFrom = () =>{
    return(window.open("https://forms.gle/8L4bjbb1C514w1zj8", "_blank"))
};
const Problem = () => {
    return (
        <div className="container">
            <div><h1>Our Recent <span>Campaigns</span></h1></div>
            <div className='gallery'>
                <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Cinque Terre" width="600" height="400" />
                <div classname='desc'><h4>Fund for children education The power of community</h4>
                    <Button variant="contained" style={{color:"white",background:"#5cb85c"}} onClick={OpenGoogleFrom}>DONATE</Button>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
            <div className='gallery'>
                <img src="https://plus.unsplash.com/premium_photo-1663090703128-10d42766bbe4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhcml0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Forest" width="600" height="400" />
                <div classname='desc'><h4>Fund for children education The power of community</h4>
                <Button variant="contained" style={{color:"white",background:"#5cb85c"}} onClick={OpenGoogleFrom}>DONATE</Button>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p></div>
            </div>
            <div className='gallery'>
                <img src="https://images.unsplash.com/photo-1617450365226-9bf28c04e130?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGNoYXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Forest" width="600" height="400" />
                <div classname='desc'><h4>Fund for children education The power of community</h4>
                <Button variant="contained" style={{color:"white",background:"#5cb85c"}} onClick={OpenGoogleFrom}>DONATE</Button>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p></div>
            </div>
        </div>
    )
};
export default Problem;
