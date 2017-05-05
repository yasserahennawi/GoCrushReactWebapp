import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '../../components/Paper';
import WelcomeHero from '../../components/WelcomeHero'
import CrushesOnMe from '../../components/CrushesOnMe'
import MyCrushes from '../../components/MyCrushes'

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  max-width: 1000px;
`;

const WelcomeHeroWrapper = styled(WelcomeHero)`
  margin-bottom: 20px;
`;

const MyCrushesComponent = styled(MyCrushes)`
  @media (max-width: 640px){
    margin-bottom: 30px;
    padding-right: 0;
  }
  padding-right: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  @media (max-width: 640px){
    flex-direction: column;
  }
  flex-direction: row
`;


class Homepage extends React.Component {
  render(){
    return (
      <Wrapper>
        <Paper>
          <WelcomeHeroWrapper />
          <ContentWrapper>
            <MyCrushesComponent />
            <CrushesOnMe />
          </ContentWrapper>
        </Paper>
      </Wrapper>
    )
  }
}

export default Homepage;


