import { useValidation } from "react-simple-form-validator";
import AuthLogo from "@/assets/media/logo/auth-logo.png";
import { useGlobalContext } from "@/context/useContext";
import { Link, useNavigate } from "react-router-dom";
import AuthApp from "./AuthApp";
import { useState } from "react";
import { signInWithGoogle } from "../../firebase";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";







function LoginApp() {

  const navigate = useNavigate();
  const { login_user, user } = useGlobalContext();
  const movePage = useNavigate();
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const { isFieldInError, getErrorsInField, isFormValid } = useValidation({
    fieldsRules: {
      email: { email: true, required: true },
      password: { required: true, minlength: 6, equalPassword: password },
    },
    state: { email, password },
  });

const navigateSeller = () => {
    navigate('./seller/Seller_login_page');
  };

  


  
  if (user.auth) {
    return <AuthApp path={"/"}></AuthApp>;
  } 
  
  
  
  
  
  
  
  else {
    return (
      <>

<section className="login-container">
          <div className="login-logo">
            <Link to={"/"}>
              <img src={AuthLogo} alt="Auth_Logo" />
            </Link>
          </div>
{/*           
      <MDBRow>
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Costumer / User Login</MDBCardTitle>
            <MDBBtn href='#' onClick={() => signInWithGoogle()}>Login with google</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      <MDBCol sm='6'>
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>Amazon Seller Login</MDBCardTitle>
            <MDBBtn href='#'>Login as Seller</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow> */}

    </section>



{/* 
    <MDBCard className='w-75'>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <br /> */}





<MDBRow>
<MDBCard className='w-50'>
        <MDBCardBody>
          <MDBCardTitle>User / Costumer Login</MDBCardTitle>
          <MDBBtn href='#' onClick={() => signInWithGoogle()}>Sign in with Google</MDBBtn>
        </MDBCardBody>
        
      </MDBCard>
      <MDBCol sm='6'>
        <MDBCard className='w-50'>
          <MDBCardBody>
            <MDBCardTitle>Amazon Seller Login</MDBCardTitle>
            <MDBBtn><NavLink to="/Seller_login">Login as Seller</NavLink></MDBBtn>
            {/* <MDBBtn onClick={navigateSeller}>Login as Seller</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
</MDBRow>
      
          {/* <div className="login-content">
            <h3>Sign-In</h3>
            <div className="login-google" onClick={() => signInWithGoogle()}>
              Login with google
            </div>
          </div>
        </section>
        <ToastContainer></ToastContainer>
        <div className="seller-login">
                <Link to={"/signup"}>
                  <button>
                    <p>Login as seller</p>
                  </button>
                </Link>
              </div> */}
      </>
      
    );
  }
}

export default LoginApp;
