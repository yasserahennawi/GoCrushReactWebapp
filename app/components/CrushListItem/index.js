import React from 'react';
import styled from 'styled-components';
import CircularImage from '../CircularImage';

const CrushRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const CrushName = styled.h4`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  flex-grow: 1;
  margin: 0 0 0 10px;
`;

const Delete = styled.h4`
  color: #C33C3C;
  font-weight: 400;
  cursor: pointer;
  margin: 0;
`;

function CrushListItem({crushImage, crushName, onDeleteClick, ...props}) {
  return (
    <CrushRow { ...props }>
      <CircularImage 
        diameter='40px'
        image={crushImage}
        />
      <CrushName>{crushName}</CrushName>
      <Delete
        onClick={onDeleteClick}>
        Delete
      </Delete>
    </CrushRow>
  );
}

CrushListItem.defaultProps = { 
  crushImage: '../static/anonymous.jpg' ,
  crushName: 'Milo Michael',
  onDeleteClick: ()=>alert("Delete Button Clicked")
};

export default CrushListItem;