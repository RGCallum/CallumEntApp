import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
*{
    margin: 0;
    
}
display: flex ;
align-content: flex-start ;
padding: 10px;
background: black;
font-weight: 200;
color: white;
font-size: 13px;
font-family: helvetica;
width: 100%;
margin-left: -8px;
Margin-top: -8px;

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
    color: turquoise;
}
@media print
{
.noprint {display:none;}
}
// .noprint{
//     display: flex;
//     justify-content: space-around;
// }
`
const LogoStyles = styled.div`
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
                        <Link to="/"> <img src="/images/CAL_ent_logo.png" alt="logo" /></Link>

                    </LogoStyles>
                    <div>

                        {/* <Link to="/"> <i className="fa fa-home"></i>Home</Link> */}
                        <Link to="/employees"> <i className="fa">👩🏾‍🦱👨🏽‍🦳🧔🏾👱🏽‍♀️</i>Employees</Link>
                        {/* <Link to="/signup"> <i className="fa fa-user-plus"></i>Sign-Up</Link> */}

                    </div>
                </div>
            </NavBarStyles>
        );
    }
}

export default NavBar;