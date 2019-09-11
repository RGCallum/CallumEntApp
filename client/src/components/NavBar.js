import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaHome, FaUsers, FaBars, FaFolderOpen, FaPrint, FaFileDownload, FaCartPlus } from 'react-icons/fa';

const NavBarStyles = styled.div`
*{
    margin: 0;   
}

padding: 5px;
background: rgb(28, 147, 145);
font-weight: 300;
color: white;
font-family: helvetica;
width: 100%;
margin-left: -8px;
// margin-top: -8px;
z-index: 1000;
position: fixed;
background-attachment: fixed;
top:0;
i{
    color: turquoise;
    font-size: 18px;
}
a{ color: white;
    text-decoration: none; 
    font-size: 20px;

}
a:visited{
    color: white;
}

a:hover{
    filter: drop-shadow(1px 1px 5px black);
    transform: scale(1.2);
    // p{
    //     display: block;
    // }
}
p{
    display: none;
}


@media print{
    display: none;
}
@media only screen and (max-width: 414px){
    // display: none;
    margin-left: -8px;
    margin-top: 0px;
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
    `


class NavBar extends Component {
    render() {
        return (

            <NavBarStyles >
                <div className="noprint">
                    <LogoStyles>
                        <Link to="/"> <FaHome />&#160; <p>Home</p>
                        {/* <img src="/images/CAL_ent_logo.png" alt="logo" /> */}
                         </Link> 

                        <Link to="/employees"> <FaUsers/>&#160; <p>Directory</p></Link>
                        {/* <Link to="/employees/#employeename"> 👩🏿‍💻Add New Employee </Link> */}

                    </LogoStyles>
                    <div>

                        {/* <Link to="/"> <i className="fa fa-home"></i>Home</Link> */}
                        {/* <Link to="/signup"> <i className="fa fa-user-plus"></i>Sign-Up</Link> */}

                    </div>
                </div>
            </NavBarStyles>
        );
    }
}

export default NavBar;