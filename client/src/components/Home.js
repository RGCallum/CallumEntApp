import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';
import { GoogleLogin } from 'react-google-login';

const ImgStyles = styled.div`
width: 100vw;
margin-left: -10px;
background-image: url('/images/office.jpeg');
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
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
    font-size: 25px;
    font-weight: 400;
    text-shadow: 1px 1px 4px black;
}
h3{
    font-size: 18px
    font-weight: 400;
    text-shadow: 1px 1px 4px black;
}

@media only screen and (max-width: 414px){
    margin-top: -10%;

}
`
const Text = styled.div`
// background-color: rgba(28, 147, 145, 0.5);
padding: 10px;
margin-top: -70px;
`
const CountStyles = styled.div`
    z-index: 1;
    // height: 100vw;
    text-align: center;
    background-color: rgba(0,0,0, 0.7);
    width: 100vw;

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
                    <h1>PaidInFull</h1> 
                        <Text>
                      <h2>A simple efficient payroll/invoice app created for small business Entrepreneurs</h2> 
                      <h3>Contact us for a personalized web or mobile version for your business today!</h3>
                      </Text>
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