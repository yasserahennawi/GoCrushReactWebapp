import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: flex;
  height: 50px;
  width: 100%;
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

class Header extends React.Component {
  render() {
    return (
      <Wrapper>  
        <Title>GoCrush</Title>
      </Wrapper>
    );
  }
};

export default Header;
