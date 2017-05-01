import React from 'react';
import styled from 'styled-components';
import SocialButton from '../../components/SocialButton';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  max-width: 600px;
  margin: auto 0;
`;

const Paper = styled.section`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: 40px 20px;
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #EEE;
`;

const Login = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 50px;
  color: rgba(0,0,0,0.15)
  font-family: 'Roboto';
  font-weight: 300;
`


class Loginpage extends React.Component {
  render(){
    return (
      <Wrapper>
        <Paper>
          <Login>Login</Login>
          <SocialButton 
            text="Sign in with facebook" 
            logo="" 
            textColor="#FFF" 
            backgroundColor="#3b5998" />
        </Paper>
      </Wrapper>
    )
  }
}

export default Loginpage;