import React from 'react';
import {NavLink} from 'react-router-dom';
import LogoUrl from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
  display:flex;
  align-items:center;
  padding:10px 100px;
  background-color: #02101f;
  color: #fff;
`

const Logo = styled.img`
  height:30px;
`

const StyledLink = styled(NavLink)`
  color:#fff;
  margin:30px;
  
  &.active{
  border-bottom:1px solid #fff;
  }
`


function Components(){
  return (
    <Header>
      <nav>
        <Logo src={LogoUrl}/>

        <StyledLink to="/" activeClassName='active'exact>首页</StyledLink>
        <StyledLink to="/history" activeClassName='active'>上传历史</StyledLink>
        <StyledLink to="/about" activeClassName='active'>关于我</StyledLink>
      </nav>

    </Header>
  )
}

export default Components;