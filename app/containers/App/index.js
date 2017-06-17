import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/Header';
import Homepage from '../../containers/Homepage';
import Loginpage from '../../containers/Loginpage';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var routes = {};

function route (path, component) {
  routes[path] = {
    component: component,
  };
};

route('/', <Homepage />);
route('/login', <Loginpage />);

var el = null;
function router () {
  el = el || document.getElementById('app');
  var url = location.href.split('?')[0].split('#')[1]  || '/';
  var route = routes[url];
    ReactDOM.render(
      <App>
        <Header />
        {route.component}
      </App>,
      document.getElementById('root')
    );
    // insertElement(route.component);
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
      <MuiThemeProvider>
        <AppWrapper id="app">
          {this.props.children}
        </AppWrapper>
      </MuiThemeProvider>
    );
  }
};

export default App;