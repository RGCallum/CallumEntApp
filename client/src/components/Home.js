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
h1{        z-index: 1000;

    font-size: 90px;
font-weight: 500;
text-shadow: 1px 1px .5px gray;
margin-left: 40px;

}
.icons {       
    z-index: 1000;
    font-size: 65px;
    filter: drop-shadow(1px 1px .5px gray);
}



h2{        
    z-index: 1000;
    font-size: 25px;
    font-weight: 300;
    // text-shadow: 1px 1px .5px gray;
}
h3{        
    z-index: 1000;
    font-size: 18px
    font-weight: 400;
    text-shadow: 1px 1px .5px gray;
}
#tenderWebPhone{        
    z-index: 1000;
    width: 50%;
    // float: right;
    margin-left: 50%;
    margin-top: -15%;
    position: absolute;
}

.iconsAnim{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.iconsAnim li {     
    opacity: 0;   
    z-index: -10;
    position: absolute;
    font-size: 20px;
    list-styles: none;
    display: block;
    margin-top:100px;
    animation: animate 25s linear infinite;
}
.iconsAnim li:nth-child(1){
    left: 25%;
    font-size: 80px;
    animation-delay: 0;
    animation-duration: 12s;

}
.iconsAnim li:nth-child(2){
    left: 10%;
    font-size: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}
.iconsAnim li:nth-child(3){
    left: 70%;
    font-size: 80px;
    animation-delay: 4s;
    animation-duration: 12s;

}
.iconsAnim li:nth-child(4){
    left: 40%;
    font-size: 60px;
    animation-delay: 6s;
    animation-duration: 12s;

}
.iconsAnim li:nth-child(5){
    left: 65%;
    font-size: 20px;
    animation-delay: 1s;
    animation-duration: 12s;

}
.iconsAnim li:nth-child(6){
    left: 25%;
    font-size: 110px;
    animation-delay: 3s;
    animation-duration: 12s;

}
.iconsAnim li:nth-child(7){
    left: 35%;
    font-size: 120px;
    animation-delay: 7s;
    animation-duration: 12s;

}
.iconsAnim li:nth-child(8){
    left: 50%;
    font-size: 25px;
    animation-delay: 5s;
    animation-duration: 12s;

}
.iconsAnim li:nth-child(9){
    left: 20%;
    font-size: 15px;
    animation-delay: 2s;
    animation-duration: 12s;

}
.iconsAnim li:nth-child(10){
    left: 5%;
    font-size: 50px;
    animation-delay: 2s;
    animation-duration: 12s;

}
@keyframes animate {
    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }
    10%{
opacity: .2;
    }
    100%{
        transform: translateY(-400px) rotate(720deg);
        opacity: 0;
    }
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
    margin-top: 5%;
    margin-left: 10%;
    width: 80%;
}

.iconsAnim li{
    // margin-top: 350px;
}

}

@media only screen and (min-width: 1280px){
    .iconsAnim li{
        margin-top: 450px;
    }
}

`
const Text = styled.div`
padding: 20px;
margin-top: -70px;
z-index: 1000;
position: absolute;
width: 50%;
@media only screen and (max-width: 414px){
    width: 100%;
    margin-top: 55%;
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
    height: 100vh;
    h1{
        z-index: 1000;
        text-align: center;

    }
    }

`
const HoverButton = styled.div`
text-align: center;

button {
    cursor: pointer;
    color: white;
    background-color: rgb(28, 147, 145);
    border-radius: 5px;
    padding: 10px;
    position: relative;
    z-index: 1000;

  }
  button:hover{
    background-color: white;
    color: rgb(28, 147, 145);
  }
  @media only screen and (max-width: 414px){
    margin-top: 60%;
    
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
                        
                        <h1>
                            {/* 💰 💸*/}
                            <FaFileInvoiceDollar className='icons' />
                            Tender</h1>
                            <img id="tenderWebPhone" src="/images/TenderWebPhone.png" alt="" />
                        <Text>
                            <h2>The quick and easy way to do your payroll, in the office or on the go. </h2>
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
                        <ul className='iconsAnim'>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        <li><FaFileInvoiceDollar className='icons2' /></li>
                        </ul>
                        
                    </CountStyles>

                    {/* <img src="/images/CAL_ent_logo.png" alt="logo" /> */}
                    {/* <img src='/images/office.jpeg' alt="people" /> */}
                </ImgStyles>
                <Paragraph>
                    <h3>Tender is a simple an efficient payroll/invoice app created for the small business owner to create invoices and check stubs for your employees and contractors. After simply entering two numbers, Tender automatically calculates all data, and when you're done, print or save your invoice with just two clicks. Tender automatically creates a memo summary of the transaction for your records. The pay button links to your payment option of choice. Easily share the invoice with the employee/contractor. Keep all your employee and contractor information in one place that you can reach from anywhere! <br/><br/> Contact us for a personalized web or mobile version for your business today!</h3>
                   
                </Paragraph>

            </div>
        );
    }
}

export default Home;