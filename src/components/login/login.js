import React from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module
import "../login/login.css"

import { useNavigate } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

function LoginPage() {
  const navigate = useNavigate()
  return (
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <span className="h1 fw-bold mb-0" style={{color:'#3265B9'}}>HOPE</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log In</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' style={{background:'#3265B9'}}>Login</MDBBtn>
            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info" onClick={() => {
      navigate('/signup');
    }} style={{color:'#3265B9'}}>Register here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://img.freepik.com/premium-photo/helping-hand-concept-international-day-peace-support_293990-165.jpg?size=626&ext=jpg&ga=GA1.2.1810410268.1680071283&semt=sph"
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left',height:"95vh"}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginPage;