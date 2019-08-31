import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';
import { GoogleLogin } from 'react-google-login';


const ImgStyles = styled.div`
display:flex;

font-family: helvetica;

font-size: 90px;

color: white;

align-items: center;
justify-content: center;
z-index: 1;
h1{
    font-size: 90px;
font-weight: 700;
text-shadow: 1px 1px 10px rgb(28, 147, 145);
}
h2{
    font-size: 20px;
    font-weight: 400;
    text-shadow: 1px 1px 4px black;
}
h3{
    font-size: 16px
    font-weight: 400;
    text-shadow: 1px 1px 4px black;
}

background-image: url('/images/office.jpeg');
background-repeat: no-repeat;
background-position: center;
background-attachment: fixed;
background-size: cover;
width: 100%;

`

const CountStyles = styled.div`
    z-index: 1;
    // height: 100vw;
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
                      <h1> CalPay</h1> 
                      <h2>A simple and efficient payroll/invoice app created for the small business</h2>
                      <h3>Customizable version online and mobile</h3>
                      <h3>Contact us for a personalized web or mobile version for your business today!</h3>

                        
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

<br/>
<br/>
<br/>
<br/>

                    </CountStyles>
                    {/* <img src="/images/CAL_ent_logo.png" alt="logo" /> */}
                    {/* <img src='/images/office.jpeg' alt="people" /> */}
                </ImgStyles>


            </div>
        );
    }
}

export default Home;