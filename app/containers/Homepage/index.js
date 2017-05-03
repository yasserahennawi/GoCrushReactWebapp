import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '../../components/Paper';
import WelcomeHero from '../../components/WelcomeHero'
import MyCrushes from '../../components/MyCrushes'

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  max-width: 1200px;
`;

const WelcomeHeroWrapper = styled(WelcomeHero)`
  margin-bottom: 20px;
  // background-color: red;
`;


class Homepage extends React.Component {
  render(){
    return (
      <Wrapper>
        <Paper>
          <WelcomeHeroWrapper />
          <MyCrushes />
        </Paper>
      </Wrapper>
    )
  }
}

export default Homepage;


