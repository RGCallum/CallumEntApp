import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Employees from './Employees';
import { GoogleLogin } from 'react-google-login';
import { FaFileInvoiceDollar, FaFolder, FaPlusCircle } from 'react-icons/fa';
import axios from 'axios'

const ImgStyles = styled.div`
width: 100vw;
margin-top: -10px;
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
    font-size: 70px;
// padding-bottom: 20px;
padding-top: 30px;
margin-left: 0px;

}
.icons {
    font-size: 50px;
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
    .googlelog{
        z-index: 1000;
        position: absolute;
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
    // margin-top: 60%;
    
  }
`

const Paragraph = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px;
// overflow-y: scroll;
h3{
    font-family: helvetica;
    font-size: 18px
    font-weight: 300;
    color: rgb(28, 147, 145);
    text-align: left;
}
a{
    color: black;
    text-decoration: none;
}
a:visited{
    color: black;
}
a:hover{
    color: blue;
} 
img{
    // width: 50%;
}
.first{
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        width: 40%;
    }
    h3{
        width:50%; 
    }
    @media only screen and (max-width: 414px){
        flex-direction: column;
        h3{
            text-align: center;
        margin-top: 5px;
        width:100%; 

        }
        img{
            width: 70%;
        }
    }
}
.second{
    width:100%;
// background-color: rgb(245, 245, 245);
    display: flex;
    // flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 50px;
    h3{
       width:100%;
    }
img{
    width: 75%;
    margin-left: -90px;
}
@media only screen and (max-width: 414px){
display: none;
}
}
.second2{
    display: none;
    flex-direction: row;
    align-items: center;
// background-color: rgb(245, 245, 245);
// width: 100vw;
img{
    width: 65%;
}
@media only screen and (max-width: 414px){
    display: flex;
    flex-direction: column;
    h3{
        text-align: center;
        margin-top: -30px;
        padding-top: 5px;
    }
    img{
        width: 135%;
    }
}
}
.third{
    display: flex;
    flex-direction: row;
    align-items: center;
    img{
        width: 60%;
    }
    @media only screen and (max-width: 414px){
        flex-direction: column;
        h3{
            text-align: center;
        margin-top: 1px;

        }
        img{
            width: 125%;
        }
    }
}
.fourth{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}
`
const LoginOutStyles = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
`
const HomeFooter = styled.div`
bottom: 0;
font-family: helvetica;
font-weight: 200;
font-size: 10px;
margin-left: -15px;
padding-bottom: 3px;
padding-top: 3px;
width: 100vw;

background-color: rgb(240,240,240);
color: rgb(28, 147, 145);
text-align: center;
a{
    color: rgb(28, 147, 145);
    text-decoration: none;
}
a:visited{
    color: rgb(28, 147, 145);
}
a:hover{
    color: black;
}
footer{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
}
#rights{
    padding-top: 3px;
}
`
const MyForm = styled.div`
margin-top:-30px;
display: flex;
flex-direction: column;  
justify-content: center;
align-items: center;
align-content: center;
text-align: center;
// input, textarea{
// width: 50vw;

// }
// width: 100vw;
//   padding-bottom: 10px;

@media only screen and (max-width: 414px){
    iframe{
width: 440px;
    }
}

`

class Home extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url: "http://localhost:3000",
            data: {
                name: name,
                email: email,
                messsage: message
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.msg === 'fail') {
                alert("Message failed to send.")
            }

        })

    }
    resetForm() {
        document.getElementById('contact-form').reset();
    }
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

                        {/* <div className="googlelog">
                        <GoogleLogin
                            clientId="345787281281-lk9ltpc9a1asua9drk5ovr6cjg7ntsjl.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'} />
                            </div> */}
                        <br />




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
                    <div className="first">
                        <img src="/images/handPhone.png" alt="mobile" />
                        <h3>Tender is a simple and efficient payroll/invoice app created for the small business owner to create invoices and pay stubs for your employees and contractors.</h3>
                    </div>
                    <br /><br />
                    <div className="second">
                        <h3>After simply entering two numbers, Tender automatically calculates all data and creates a summary of the transaction for your records.</h3>
                        <img src="/images/laptopgif.gif" alt="value" />
                    </div>
                    <div className="second2">
                        <img src="/images/laptopgif.gif" alt="value" />
                        <h3>After simply entering two numbers, Tender automatically calculates all data and creates a summary of the transaction for your records.</h3>
                    </div>
                    <br /><br />

                    <div className="third"><img src="/images/monitorPrint3.png" alt="print" />
                        <h3>    Export a professional version and easily share with just a few clicks. <br />Keep all your information organized in one place that you can reach from anywhere at anytime! </h3>
                    </div>
                    <br />
                    <br />
                    <HoverButton>
                        <Link to="/employees"> <button>Enter Tender here</button></Link>
                    </HoverButton>
                    <br />

                    <div className="fourth">
                        <h3>  Contact us below for a quote on your personalized version of Tender today!</h3>
                    </div>
                    <br />

                </Paragraph>
                <MyForm>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIVJknuqNa24FnduXyMJAZiFmZ6cwa1Qa6JJT2hBWsmIikuw/viewform?embedded=true" width="640" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

                    {/* <form action='mailto:sceneitpix@gmail.com' id="contact-form" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label><br/>
                            <input type="text" className="form-control" id="name" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="InputEmail1">Email:</label><br/>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label><br/>
                            <textarea className="form-control" rows="5" id="message"></textarea>
                        </div>
                        <button type="submit" className="btn">Submit</button>
                    </form> */}

                </MyForm>
                <HomeFooter>
                    <footer>
                        <a href="#" id="rights">2019 ©️ All Rights Reserved.</a>
                        <a href="https://rgcallum.herokuapp.com/">  Built with ❤️ by RGC</a>
                        {/* <a href="mailto:sceneitpix@gmail.com "> ✉️Email: sceneitpix@gmail.com </a> */}





                    </footer>
                </HomeFooter>
            </div>
        );
    }
}

export default Home;
