import React from 'react';
import "./signup.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { maxHeight } from '@mui/system';

function Signup() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' style={{display:"flex",maxHeight:"100vh",height:"100vh"}}>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'white'}}>
            Do something <br />
            <span style={{color: '#3265B9'}}>for someones better future</span>
          </h1>

          <p className='px-3' style={{color: 'white'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass' style={{height:"80vh"}}>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Mobile Number' id='form2' type='number'/>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type='password'/>

    

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">

<p>or sign up with:</p>

<MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
  <MDBIcon fab icon='facebook-f' size="sm"/>
</MDBBtn>

<MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
  <MDBIcon fab icon='twitter' size="sm"/>
</MDBBtn>

<MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
  <MDBIcon fab icon='google' size="sm"/>
</MDBBtn>

<MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
  <MDBIcon fab icon='github' size="sm"/>
</MDBBtn>

</div>

              
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Signup;