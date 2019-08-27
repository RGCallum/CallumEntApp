import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';
import { GoogleLogin } from 'react-google-login';


const ImgStyles = styled.div`
display:flex;
*{
    margin: 0;
}
font-family: helvetica;
font-size: 90px;
color: black;
font-weight: 700;
text-shadow: 1px 1px 1px #587d9689;
align-items: center;
justify-content: center;
// background-color: #587d9689;
z-index: 1;
background-attachment: fixed;
background-size: cover;
background-image: url('/images/office.jpeg');
img{
    
  position: absolute;
    z-index: -2;
    //  width: 150%;
     background-size: cover;
     background-repeat: no-repeat;
    margin-top: -100px;
  
}
`

const CountStyles = styled.div`
    z-index: 1;
    height: 100vw;
    text-align: center;
    
`
const HoverButton = styled.div`
button {
    cursor: pointer;
    bottom: 5px;
    right: 200px;
    color: white;
    background-color: rgb(28, 147, 145);
    border-radius: 5px;
    padding: 10px;
    
  }
  button:hover{
    background-color: white;
    color: rgb(28, 147, 145);
  }
`
const LoginOutStyles = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
`



class Home extends Component {
    render() {
        const responseGoogle = (response) => {
            console.log(response);
        }

        return (
            <div>

                <ImgStyles>
                    <CountStyles>
                        CalPay

                        <br />
                        <Link to="/employees">
                            <HoverButton>
                                <button>Click to Enter </button>
                            </HoverButton></Link>
                        <GoogleLogin
                            clientId="345787281281-lk9ltpc9a1asua9drk5ovr6cjg7ntsjl.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'} />


                    </CountStyles>
                    {/* <img src="/images/CAL_ent_logo.png" alt="logo" /> */}
                    {/* <img src='/images/office.jpeg' alt="people" /> */}
                </ImgStyles>


            </div>
        );
    }
}

export default Home;