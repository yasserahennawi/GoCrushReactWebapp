import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '../../components/Paper';
import WelcomeHero from '../../components/WelcomeHero'
import CrushesOnMe from '../../components/CrushesOnMe'
import MyCrushes from '../../components/MyCrushes'
import {getToken} from '../../utils/token.js';
import {authUser} from '../../APIs/userAPI.js';
import {getMyCrushesPromise} from '../../APIs/crushAPI.js';
import Cookies from 'universal-cookie';
import request from 'superagent-bluebird-promise';

const cookies = new Cookies();

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



  componentWillMount() {
    this.setState({
      userData: null,
    });

    getToken();
    authUser().then((data)=>{
      this.setState({
        userData: data,
      });
      cookies.set('appUserID', data.body.appUserID);
      getMyCrushesPromise();
      return data ;
    })
    .then((data)=>{
    })
    // const { cookies } = this.props;
    // this.state = {
    //   token: cookies.get('token'),
    // };
  }

  componentDidMount() {

  }

  getHomepage(userData) {
    return (
      <Wrapper>
        <Paper>
          <WelcomeHeroWrapper 
            userName={userData.body.displayName}
            userImage={userData.body.pictureUrl}/>
          <ContentWrapper>
            <MyCrushesComponent />
            <CrushesOnMe />
          </ContentWrapper>
        </Paper>
      </Wrapper>
    )
  }

  loading(){
    return <div>loading</div>
  }

  render(){
    const userData = this.state.userData;
    if (userData) {
      return this.getHomepage(userData)
    } else {
      return this.loading()
    }
  }
}

export default Homepage;
