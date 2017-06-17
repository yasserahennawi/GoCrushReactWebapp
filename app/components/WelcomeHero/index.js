import React from 'react';
import styled from 'styled-components';
import CircularImage from '../CircularImage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const WelcomeTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 5px;
  font-family: 'Roboto';
  font-weight: 400;
`;

const UserName = styled.h2`
  font-family: 'Roboto';
  line-heightL 100%;
  font-weight: 300;
  font-size: 26px;
  margin: 0 0 15px;
`;

function Welcome({ userName, userImage, ...props }) {
  return (
    <Wrapper { ...props }>
      <WelcomeTitle>Welcome to GoCrush</WelcomeTitle>
      <UserName>{userName}</UserName>
      <CircularImage 
        image={userImage}
        diameter='70px' />
    </Wrapper>
  );
}

Welcome.defaultProps = { 
  userName: 'Hamada Sha2awa',
  userImage: '../static/anonymous.jpg'
};

export default Welcome;