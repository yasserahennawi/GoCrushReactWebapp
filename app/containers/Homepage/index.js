import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorModal from '../../components/ErrorModal';
import WelcomeHero from '../../components/WelcomeHero'
import CrushesOnMe from '../../components/CrushesOnMe'
import Card from 'material-ui/Card';
import MyCrushes from '../../components/MyCrushes'
import {authUser} from '../../APIs/userApi.js';
import {getCrushesOnMePromise, deleteCrushPromise, getMyCrushesPromise, crushOnPromise} from '../../APIs/crushApi.js';
import {getUserErrorMessage} from '../../ErrorHandling';
import Cookies from 'universal-cookie';
import request from 'superagent-bluebird-promise';
import Header from '../../components/Header';

const cookies = new Cookies();

const ErrorModalContainer = styled.div`
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  // height: calc(100% - 180px);
  height: 100%;
  margin-top: -70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: fixed;
`

const HomepageErrorModal = styled(ErrorModal)`
  max-width: 500px;
  margin: auto 0;
`

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  max-width: 1000px;
`;

const Paper = styled(Card)`
  width: 100%;
  & > div {
    width: 100%;
  }
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WelcomeHeroWrapper = styled(WelcomeHero)`
  margin-bottom: 40px;
`;

const MyCrushesComponent = styled(MyCrushes)`
  @media (max-width: 850px){
    margin-bottom: 30px;
    padding-right: 0;
  }
  padding-right: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  & > div:first-child {
    margin-bottom: 0;
    margin-right: 20px;
  }
  @media (max-width: 850px){
    flex-direction: column;
    & > div:first-child {
      margin-bottom: 20px;
    }
  }
  flex-direction: row
`;


class Homepage extends React.Component {
  removeStatedCrush(id) {
    var statedCrushes = this.state.userCrushes;
    for(let statedCrush of statedCrushes) {
      var key = statedCrushes.indexOf(statedCrush);
      if (id == statedCrush.fbCrushID) {
        this.setState({
          userCrushes: [
            ...statedCrushes.slice(0,key),
            ...statedCrushes.slice(key+1),
          ]
        })
      }
    }
  }

  onSubmitCrush(e){
    e.preventDefault();
    crushOnPromise(this.state.textFieldValue)
    .then((data)=>{
      var arr = this.state.userCrushes;
      this.setState({
        userCrushes: [
          ...arr,
          data
        ],
        textFieldValue: ''
      })

      return getCrushesOnMePromise();
    })
    .then((data)=>{
      this.setState({
        crushesOnMe: data
      });
    })
    .catch((e)=>{
      if (getUserErrorMessage(e)) {
        alert(getUserErrorMessage(e));
      }
    })
  }

  onDeleteCrush(id){
    deleteCrushPromise(id)
    .then((data)=>{
      this.removeStatedCrush(id);
      return getCrushesOnMePromise();
    })
    .then((data)=>{
      this.setState({
        crushesOnMe: data
      });
    })
    .catch((e)=>{
      if (getUserErrorMessage(e)) {
        alert(getUserErrorMessage(e));
      }
    })
  }

  onTextFieldChange(e){
    this.setState({
        textFieldValue: e.target.value,
    })
  }

  componentWillMount() {
    this.onTextFieldChange = this.onTextFieldChange.bind(this);
    this.onSubmitCrush = this.onSubmitCrush.bind(this);
    this.setState({
      textFieldValue: '',
      crushesOnMe: 0
    });

    authUser()
    .then((data)=>{
      this.setState({
        userData: data,
      });
      cookies.set('appUserID', data.appUserID);
      return getCrushesOnMePromise();
    })
    .then((data)=>{
      this.setState({
        crushesOnMe: data
      });
      return  getMyCrushesPromise()
    })
    .then((data)=>{
      this.setState({
        userCrushes: data,
      });
    })
    .catch((e)=>{
      if (getUserErrorMessage(e)) {
        alert(getUserErrorMessage(e));
      }
    })
  }

  componentDidMount() {
  }

  getHomepage(userData, userCrushes, crushesOnMe) {
    var crushes = userCrushes.map((crush)=>{
      return ({
        crushName: crush.crushDisplayName,
        crushImage: crush.crushPictureUrl ,
        onDeleteClick: ()=> {
          this.onDeleteCrush(crush.fbCrushID)
        }
      })
    })
    return (
      <Wrapper>
        <Paper>
          <WelcomeHeroWrapper 
            userName={userData.displayName}
            userImage={userData.pictureUrl}/>
          <ContentWrapper>
            <Paper>
              <MyCrushesComponent
                crushes={crushes}
                onSubmit={this.onSubmitCrush}
                textFieldValue={this.state.textFieldValue}
                onTextFieldChange={this.onTextFieldChange}/>
            </Paper>
            <Paper>
              <CrushesOnMe crushesNumber={crushesOnMe} />
            </Paper>
          </ContentWrapper>
        </Paper>
      </Wrapper>
    )
  }

  loading(){
    return <div>loading</div>
  }

  render(){
    var userData = this.state.userData;
    var userCrushes = this.state.userCrushes;
    var crushesOnMe = this.state.crushesOnMe;
    return userData && crushesOnMe && userCrushes ? this.getHomepage(userData, userCrushes, crushesOnMe) : this.loading() 
  }
}

export default Homepage;
