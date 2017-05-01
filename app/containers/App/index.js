import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import Homepage from '../../containers/Homepage';
import Loginpage from '../../containers/Loginpage';
import styled from 'styled-components';

var routes = {};
function route (path, templateId, controller) {
  routes[path] = {templateId: templateId, controller: controller};
};

route('/', <Homepage />, function () {console.log("a8as")});
route('/login', <Loginpage />, function () {console.log("a8as")});

var el = null;
function router () {
  el = el || document.getElementById('app');
  var url = location.hash.slice(1) || '/';
  var route = routes[url];
    console.log(route.templateId);
    ReactDOM.render(
      <App children= {[
        <Header />,
        route.templateId
      ]} />,
      document.getElementById('root')
    );
    // insertElement(route.templateId);
}

// insertElement(element) {

// }

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

const AppWrapper = styled.div `
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #F8F8F8;
`

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }  

  render() {
    return (
      <AppWrapper id="app">
        {this.props.children}
      </AppWrapper>
    );
  }
};

export default App;