import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import CircularImage from '../CircularImage';
import CrushListItem from '../CrushListItem';

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

const ListTitle = styled.h4`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin: 0 0 15px;
`;

const CrushList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  & > div:last-child {
    margin: 0;
  }
`;

const CrushRow = styled(CrushListItem)`
  margin-bottom: 10px;
`;

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function MyCrushes(props) {
  
  const listItems = props.crushes.map((crush, index) =>
    <CrushRow 
      key={index}
      crushName= {crush.crushName}
      crushImage= {`https://randomuser.me/api/portraits/men/${index+randomIntFromInterval(1,70)}.jpg`}
      onDeleteClick= {crush.onDeleteClick} />
  );
  
  return (
      <Wrapper>
        <ListTitle>
          You have crush on:
        </ListTitle>
        <CrushList>
          {listItems}
        </CrushList>
        <TextField />
      </Wrapper>
  );
}

MyCrushes.defaultProps = {
  crushes: [
    {
      crushName: 'Romain Hoogmoed',
      crushImage: '../static/anonymous.jpg',
      onDeleteClick: ()=> alert("delete button Clicked")
    },
    {
      crushName: 'Santiago Bernabeu',
      crushImage: '../static/anonymous.jpg',
      onDeleteClick: ()=> alert("delete button Clicked")
    },
    {
      crushName: 'Milo Michael',
      crushImage: '../static/anonymous.jpg',
      onDeleteClick: ()=> alert("delete button Clicked")
    }
  ]
  // crushName: 'Milo Michael',
}

export default MyCrushes;