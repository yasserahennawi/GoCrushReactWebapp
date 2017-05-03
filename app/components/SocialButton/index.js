import React from 'react';
import styled from 'styled-components';

const SocialButtonWrapper = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #EEE;
`
const LogoContainer = styled.div `
  display: flex;
  width: 30px;
  height: 30px;
  background-color: #FFF;
`
const Text = styled.div `
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto';
  // font-weight: 300;
`

class SocialButton extends React.Component {
  render() {
    return (
      <SocialButtonWrapper style={{
        backgroundColor: this.props.backgroundColor
      }}>
        <LogoContainer>
          {this.props.logo}
        </LogoContainer>
        <Text style={{
          color: this.props.textColor
        }}>
          {this.props.text}
        </Text>
      </SocialButtonWrapper>
    );
  }
};

export default SocialButton;
