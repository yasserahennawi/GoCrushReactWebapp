import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
`;

const Title = styled.h1`
  font-size: 30px;
`;

class Homepage extends React.Component {
  render(){
    return (
      <Wrapper>
        <Title>Welcome, happy user!</Title>
      </Wrapper>
    )
  }
}

export default Homepage;