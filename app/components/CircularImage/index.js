import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
  background-size: cover;
  border-radius: 100%;
  border: 1px solid #CCC;
`;


function CircularImage(props) {
  return (
    <Image style={{
      width: props.diameter,
      height: props.diameter,
      backgroundImage: `url(${props.image})`
    }}/>
  );
}

CircularImage.defaultProps = { 
  image: '../static/anonymous.jpg' ,
  diameter: '50px'
};

export default CircularImage;