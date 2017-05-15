import React from 'react';
import styled from 'styled-components';
import Logout from '../../components/icons/Logout';

const Wrapper = styled.div `
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  background: #c33c3c;
  align-items: center;
`;

const Title = styled.h3 `
  font-family: ErasITC ;
  font-weight: 900;
  font-size: 30px;
  line-height: 100%;
  margin: 0;
  color: #FFF;
`;

const IconWrapper = styled.div `
  display: flex;
  width: 30px;
  height: 30px;
  padding: 2px 0;
  box-sizing: border-box;
`;

class Header extends React.Component {
  render() {
    return (
      <Wrapper>  
        <Title>GoCrush</Title>
        <IconWrapper>
          <Logout onClick={()=>alert("Logout Clicked")}/>
        </IconWrapper>
      </Wrapper>
    );
  }
};

export default Header;
