import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';
import { GoogleLogin } from 'react-google-login';
import { FaFileInvoiceDollar, FaFolder, FaPlusCircle } from 'react-icons/fa';

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
font-weight: 500;
text-shadow: 1px 1px .5px gray;
margin-left: 40px;

}
.icons {
    font-size: 65px;
    filter: drop-shadow(1px 1px .5px gray);
}
h2{
    font-size: 25px;
    font-weight: 200;
    text-shadow: 1px 1px .5px gray;
}
h3{
    font-size: 18px
    font-weight: 400;
    text-shadow: 1px 1px .5px gray;
}
#tenderWebPhone{
    width: 50%;
    // float: right;
    margin-left: 50%;
    margin-top: 10%;
    position: absolute;
}
@media only screen and (max-width: 414px){
    margin-top: -10%;

h1{
    font-size: 50px;
padding-bottom: 20px;
padding-top: 50px;
margin-left: 0px;

}
.icons {
    font-size: 40px;
}
#tenderWebPhone{
    margin-top: 40%;
    margin-left: 10%;

    width: 80%;
}
}

`
const Text = styled.div`
// background-color: rgba(28, 147, 145, 0.5);
padding: 20px;
margin-top: -70px;
z-index: 100;
position: absolute;
width: 50%;
@media only screen and (max-width: 414px){
    width: 100%;
    margin-top: 25%;
text-align: center;
margin-left: -18px;
}
`
const CountStyles = styled.div`
    z-index: 1;
    height: 50vw;
    text-align: left;
    background-color: rgba(28, 147, 145, 0.5);
    width: 100vw;
    @media only screen and (max-width: 414px){
    height: 65vh;
    h1{
        text-align: center;

    }
    }

`
const HoverButton = styled.div`

button {
    cursor: pointer;
    color: white;
    background-color: rgb(28, 147, 145);
    border-radius: 5px;
    padding: 10px;
    z-index: 1;
  }
  button:hover{
    background-color: white;
    color: rgb(28, 147, 145);
  }
`

const Paragraph = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
h3{
    font-family: helvetica;
    font-size: 18px
    font-weight: 100;
    color: rgb(28, 147, 145);
    text-align: center;
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
                        <img id="tenderWebPhone" src="/images/TenderWebPhone.png" alt="" />
                        <h1>
                            {/* 💰 💸*/}
                            <FaFileInvoiceDollar className='icons' />

                            Tender</h1>
                        <Text>
                            <h2>The quick and easy way to do payroll, whether in the office or on the go. </h2>
                        </Text>


                        {/* <GoogleLogin
                            clientId="345787281281-lk9ltpc9a1asua9drk5ovr6cjg7ntsjl.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'} /> */}

                        <br />
                        
                        
                        <HoverButton>
                        <Link to="/employees"> <button>Click to Enter </button></Link>
                        </HoverButton>
                        <br />
                        <br />
                        <br />
                        
                    </CountStyles>

                    {/* <img src="/images/CAL_ent_logo.png" alt="logo" /> */}
                    {/* <img src='/images/office.jpeg' alt="people" /> */}
                </ImgStyles>
                <Paragraph>
                    <h3>Tender is a simple an efficient payroll/invoice app created for small business Entrepreneurs. <br/> Contact us for a personalized web or mobile version for your business today!</h3>
                   
                </Paragraph>

            </div>
        );
    }
}

export default Home;