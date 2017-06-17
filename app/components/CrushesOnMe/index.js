import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const Text = styled.div`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0;
`;

const ShareWord = styled(Text)`
  display: inline;
  color: #c33c3c;
  cursor: pointer;
`

const CrushesNumber = styled.h2`
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: 500;
  align-self: center;
  margin: 0;
`;

function CrushesOnMe({crushesNumber, onShareClick, ...props}) {
  return (
    <Wrapper { ...props}>
      <Text>Currently, the number of crushes on you is:</Text>
      <CrushesNumber>{crushesNumber}</CrushesNumber>
      <Text>
        Wanna let your friends know that you use GoCrush? 
        <ShareWord
          onClick={onShareClick}> Share </ShareWord>
        with facebook now!
      </Text>
    </Wrapper>
  )
}

CrushesOnMe.defaultProps = {
  // crushesNumber: '2',
  onShareClick: ()=>alert('Share to facebook Clicked')
}

export default CrushesOnMe;


