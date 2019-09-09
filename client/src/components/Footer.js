import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaHome, FaUsers, FaFolderOpen, FaPrint, FaFileDownload, FaCartPlus } from 'react-icons/fa';

const FooterStyles = styled.div`
*{
    margin: 0;   
}
display: none;
text-align: center;
position: fixed;
// display: flex;
// justify-content: space-around;
padding: 10px;
background: rgb(28, 147, 145);
font-weight: 300;
color: white;
// font-size: 13px;
font-family: helvetica;
width: 100%;
margin-left: -8px;
margin-top: -8px;
bottom: 0
z-index: 1;
background-attachment: fixed;
i{
    color: turquoise;
    font-size: 18px;
}
a{
    text-decoration: none; 
     
}
a:visited{
    color: white;
}
a:hover{
    color: black;
}

@media print
{
.noprint {display:none;}
}
// .noprint{
//     display: flex;
//     justify-content: space-around;
// }

// display: none;
@media only screen and (min-width: 415px){
    display: none;
}
`
const LogoStyles = styled.div`
display: flex;
justify-content: space-evenly;
{
    img{
        width: 5%;
    }
}
@media only screen and (max-width: 414px){
    // font-size: 13px;
}
    `


class Footer extends Component {
    render() {
        return (

            <FooterStyles >
                <div className="noprint">
                <LogoStyles>
                        <Link to="/"> <FaHome /> <br/>
                        Home 
                        {/* <img src="/images/CAL_ent_logo.png" alt="logo" /> */}
                        </Link> 

                        <Link to="/employees"> <FaUsers/>
                        <br/> Directory </Link>
                        {/* <Link to="/employees/#employeename"> 👩🏿‍💻Add New Employee </Link> */}

                    </LogoStyles>
                    <div>

                        {/* <Link to="/"> <i className="fa fa-home"></i>Home</Link> */}
                        {/* <Link to="/signup"> <i className="fa fa-user-plus"></i>Sign-Up</Link> */}

                    </div>
                </div>
            </FooterStyles>
        );
    }
}

export default Footer;