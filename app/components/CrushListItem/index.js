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
  padding-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Delete = styled.h4`
  flex-shrink: 0;
  color: #C33C3C;
  font-weight: 400;
  cursor: pointer;
  margin: 0;
`;

const CrushImage = styled(CircularImage)`
  flex-shrink: 0;
`

function CrushListItem({ crushImage, crushName, onDeleteClick, ...props }) {
  return (
    <CrushRow { ...props }>
      <CrushImage 
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