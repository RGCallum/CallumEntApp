import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';


const ImgStyles = styled.div`
display:flex;
*{
    margin: 0;
}
font-family: helvetica;
font-size: 30px;
color: white;
text-shadow: 1px 1px 1px black;
align-items: center;
justify-content: center;
background-color: #587d9689;
// img{
    
// //   position: relative;
// //   z-index: -2;
//      width: 20vw;
//      background-size: cover;
//      background-repeat: no-repeat;
// //   margin-top: 100;
// }
`

const CountStyles = styled.div`
    z-index: 1;
    // position: absolute;
    // background-size: 10%;
    // width: -30%;
    height: 100vw;
    // margin-top: -10%;
    
`
const HoverButton = styled.div`
button {
    bottom: 5px;
    right: 200px;
    color: white;
    background-color: blue;
    border-radius: 5px;
  }
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
                        
                        Callum Enterprise Invoice
                       <br/> <Link to="/employees">
                       <HoverButton>
                        <button>Click to Enter </button>
                        </HoverButton>
                        <GoogleLogin
    clientId="345787281281-lk9ltpc9a1asua9drk5ovr6cjg7ntsjl.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <GoogleLogout
      buttonText="Logout"
    //   onLogoutSuccess={logout}

    >
    </GoogleLogout>
                        </Link>
  {/* <img id = 'countdown' src="/images/clapping.gif" alt="countdown"/> */}
                     </CountStyles> 
                    {/* <img src="/images/CAL_ent_logo.png" alt="logo" /> */}
                </ImgStyles>

               
            </div>
        );
    }
}

export default Home;