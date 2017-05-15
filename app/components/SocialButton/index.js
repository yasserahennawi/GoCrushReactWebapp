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
  cursor: pointer
`
const LogoContainer = styled.div `
  display: flex;
  width: 30px;
  height: 30px;
`
const Text = styled.div `
  flex-grow: 1;
  text-align: center;
  font-size: 16px;
  font-family: 'Roboto';
`

function SocialButton({onClick, backgroundColor, logo, textColor, text, ...props}) {
  return (
    <SocialButtonWrapper 
      { ...props}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor
      }}>
      <LogoContainer>
        {logo}
      </LogoContainer>
      <Text style={{
        color: textColor
      }}>
        {text}
      </Text>
    </SocialButtonWrapper>
  );
};

export default SocialButton;
