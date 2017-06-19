import React from 'react';
import styled from 'styled-components';
import SocialButton from '../../components/SocialButton';
import Card from 'material-ui/Card';
import Facebook from '../../components/icons/Facebook';

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

const Paper = styled(Card)`
  // flex-direction: column;
  // display: flex;
  width: 100%;
  padding: 40px 30px;
  // background-color: white;
  // box-sizing: border-box;
  // border-bottom: 1px solid #EEE;
`

class Loginpage extends React.Component {

  getLoginpage() {
    return (
      <Wrapper>
        <Paper>
          <Login>Login</Login>
          <SocialButton 
            onClick={()=>{window.location = 'http://localhost:4567/api/login'}}
            text='Sign in with facebook'
            logo={<Facebook/>}
            textColor='#FFF'
            backgroundColor='#3b5998'/>
        </Paper>
      </Wrapper>
    )
  }
  
  render() {return this.getLoginpage()}
}

export default Loginpage;