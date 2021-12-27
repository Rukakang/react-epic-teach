import React from "react";
import {Link, NavLink} from "react-router-dom"
import Logo from "./logo.svg"
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  vertical-align: middle;
  background-color: #02101f;
`;
const Img = styled.img`
  height: 30px;
`;

const StyledLink = styled(NavLink)`
  color: white;
  margin-left: 30px;
  &.active{
    border-bottom: 1px solid #fff;
  }
`


function Component(){
    return(
        <Header>
            <Img src={Logo}/>
            <StyledLink exact activeClassName="active" to= "/">首页</StyledLink>
            <StyledLink activeClassName="active" to= "/history">历史</StyledLink>
            <StyledLink activeClassName="active" to= "/about">关于我</StyledLink>
        </Header>
    )
}
export default Component