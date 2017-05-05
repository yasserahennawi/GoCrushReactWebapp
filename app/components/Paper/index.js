import React from 'react';
import styled from 'styled-components';

const Paper = styled.section`
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: 40px 30px;
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #EEE;
`;

function Welcome(props) {
  return (
    <Paper>
      {props.children}
    </Paper>
  );
}

export default Welcome;