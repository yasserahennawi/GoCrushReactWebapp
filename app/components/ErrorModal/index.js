import React from 'react';
import styled from 'styled-components';
import Panda from '../icons/Panda'

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #EEE;
`;

const LogoContainer = styled.div `
  display: flex;
  width: 200px;
  height: 200px;
`

const ErrorMessage = styled.h3 `
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 10px;
`

function ErrorModal({errorMessage, ...props}) {
  return (
    <Wrapper {...props}>
      <LogoContainer>
        <Panda />
      </LogoContainer>
      <ErrorMessage>
        {errorMessage}
      </ErrorMessage>
    </Wrapper>
  );
}

ErrorModal.defaultProps = {
  errorMessage: "Sorry, An error happened"
}

export default ErrorModal;