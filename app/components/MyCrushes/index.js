import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import CircularImage from '../CircularImage';
import PropTypes from 'prop-types';
import CrushListItem from '../CrushListItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Wrapper = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

const ListTitle = styled.h4`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 15px;
`;

const CrushList = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  & > div:last-child {
    margin: 0;
  }
  // margin-bottom: 20px;
`;

const CrushRow = styled(CrushListItem)`
  margin-bottom: 10px;
`;

function MyCrushes({onSubmit, textFieldValue, onTextFieldChange, crushes, onChange, ...props}) {
  
  const listItems = crushes.map((crush, index) =>
    <CrushRow 
      key={index}
      crushName= {crush.crushName}
      crushImage= {crush.crushImage}
      onDeleteClick= {crush.onDeleteClick} />
  );
  
  return (
      <Wrapper {...props}>
        <ListTitle>
          You have crush on:
        </ListTitle>
        <CrushList>
          {listItems}
        </CrushList>
        <form onSubmit={onSubmit}>
          <TextField
            value={textFieldValue}
            onChange={onTextFieldChange}
            style={{
              width:' calc(100% - 10px)',
              whiteSpace:' nowrap',
              overflow:' hidden',
              textOverflow:' ellipsis',
              boxSizing:' border-box',
              marginLeft:' 10px',
            }}
            floatingLabelText="Paste your crush About-URL here"
            floatingLabelFocusStyle={{color: '#c33c3c'}}
            floatingLabelStyle={{
              fontSize: '16px',
              fontWeight: '500'}}
            underlineFocusStyle={{borderColor: '#c33c3c'}}/>
        </form>
      </Wrapper>
  );
}

MyCrushes.defaultProps = {
  crushes: [
    {
      crushName: 'Romain Hoogmoed',
      crushImage: '../static/anonymous.jpg',
    },
    {
      crushName: 'Santiago Bernabeu',
      crushImage: '../static/anonymous.jpg',
    },
    {
      crushName: 'Milo Michael',
      crushImage: '../static/anonymous.jpg',
    }
  ]
}

export default MyCrushes;