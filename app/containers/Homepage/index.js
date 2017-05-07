import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '../../components/Paper';
import WelcomeHero from '../../components/WelcomeHero'
import CrushesOnMe from '../../components/CrushesOnMe'
import MyCrushes from '../../components/MyCrushes'
import {authUser} from '../../APIs/userAPI.js';
import {deleteCrushPromise, getMyCrushesPromise, crushOnPromise} from '../../APIs/crushAPI.js';
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
  removeStatedCrush(id) {
    var statedCrushes = this.state.userCrushes.body;
    for(let statedCrush  of statedCrushes) {
      var key = statedCrushes.indexOf(statedCrush);
      if (id == statedCrush.fbCrushID) {
        this.setState({
          userCrushes: {body: [
            ...statedCrushes.splice(0,key),
            ...statedCrushes.splice(key+1),
          ]}
        })
      }
    }
  }

  onSubmitCrush(e){
    e.preventDefault();
    crushOnPromise(this.state.textFieldValue)
    .then((data)=>{
      var arr = this.state.userCrushes.body;
      this.setState({
        userCrushes: {body: [
          ...arr,
          data.body
        ]}
      })
    })
  }

  onDeleteCrush(id){
    deleteCrushPromise(id)
    .then((data)=>{
      this.removeStatedCrush(id);
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
      userData: null,
      userCrushes: null,
      textFieldValue: ''
    });

    authUser()
    .then((data)=>{
      this.setState({
        userData: data,
      });
      cookies.set('appUserID', data.body.appUserID);
      return  getMyCrushesPromise()
    })
    .then((data)=>{
      this.setState({
        userCrushes: data,
      });
    })
    // const { cookies } = this.props;
    // this.state = {
    //   token: cookies.get('token'),
    // };
  }

  componentDidMount() {
  }
  getHomepage(userData, userCrushes) {
    var crushes = userCrushes.body.map((crush, index)=>{
      return ({
        crushName: crush.crushDisplayName,
        crushImage: crush.crushPictureUrl ,
        onDeleteClick: ()=> {
          this.onDeleteCrush(crush.fbCrushID)
        },
      })
    })
    return (
      <Wrapper>
        <Paper>
          <WelcomeHeroWrapper 
            userName={userData.body.displayName}
            userImage={userData.body.pictureUrl}/>
          <ContentWrapper>
            <MyCrushesComponent
              crushes={crushes}
              onSubmit={this.onSubmitCrush}
              textFieldValue={this.state.textFieldValue}
              onTextFieldChange={this.onTextFieldChange}/>
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
    const userCrushes = this.state.userCrushes;
    return userData && userCrushes ? this.getHomepage(userData, userCrushes) : this.loading() 
  }
}

export default Homepage;
