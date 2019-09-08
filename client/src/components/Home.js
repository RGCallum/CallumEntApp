import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';
import { GoogleLogin } from 'react-google-login';
import { FaFileInvoiceDollar, FaFolder, FaPlusCircle} from 'react-icons/fa';

const ImgStyles = styled.div`
width: 100vw;
margin-left: -10px;
// background-image: url('/images/TenderWebPhone.png');
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
// text-shadow: 1px 1px 10px rgb(28, 147, 145);

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
h1{
    font-size: 50px;
padding-bottom: 20px;
padding-top: 50px;

}
}
#tenderWebPhone{
    width: 50%;
    // float: right;
    margin-left: 50%;
    margin-top: 10%;
    position: absolute;
}
`
const Text = styled.div`
// background-color: rgba(28, 147, 145, 0.5);
padding: 20px;
margin-top: -70px;
z-index: 100;
position: absolute;
width: 50%;
`
const CountStyles = styled.div`
    z-index: 1;
    height: 50vw;
    text-align: left;
    background-color: rgba(28, 147, 145, 0.5);
    width: 100vw;

`
const HoverButton = styled.div`
// position: absolute;
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
                    <img id="tenderWebPhone"src="/images/TenderWebPhone.png" alt=""/>
                    <h1>
                        {/* 💰 */}
                        <FaFileInvoiceDollar/>
                        Tender</h1> 
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