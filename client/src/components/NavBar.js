import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaHome, FaUsers, FaFolderOpen, FaPrint, FaFileDownload, FaCartPlus } from 'react-icons/fa';

const NavBarStyles = styled.div`
*{
    margin: 0;   
}

padding: 10px;
background: rgb(28, 147, 145);
font-weight: 300;
color: white;
font-family: helvetica;
width: 100%;
margin-left: -8px;
margin-top: -8px;
// position: relative;
// z-index: 10;
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


@media print{
    display: none;
.noprint {display:none;}
}
// .noprint{
//     display: flex;
//     justify-content: space-around;
// }
@media only screen and (max-width: 414px){
    // display: none;

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
                        <Link to="/"> <FaHome />&#160;Home 
                        {/* <img src="/images/CAL_ent_logo.png" alt="logo" /> */}
                        </Link> 

                        <Link to="/employees"> <FaUsers/>&#160;Employees </Link>
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