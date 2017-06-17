import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  background-size: cover;
  border-radius: 100%;
  border: 1px solid #CCC;
`;


function CircularImage({image, diameter, ...props}) {
  return (
    <Image  
      { ...props }
      style={{
        width: diameter,
        height: diameter,
        backgroundImage: `url(${image})`
      }} />
  );
}

CircularImage.defaultProps = { 
  image: '../static/anonymous.jpg' ,
  diameter: '50px'
};
export default CircularImage;