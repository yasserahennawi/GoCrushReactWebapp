import React from 'react';
import styled from 'styled-components';
import SocialButton from '../../components/SocialButton';
import Paper from '../../components/Paper';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  max-width: 600px;
  margin: auto 0;
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
            onClick={()=>alert("Login with facebook clicked")}
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