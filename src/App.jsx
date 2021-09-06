import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/Preloader/Preloader';
import DefaultMain from './components/DefaultMain/DefaultMain';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/reducers/appReducer';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (this.props.isInitialized) return (
      <div className='app-wrapper'>
        <div className='grid-container'>
          <HeaderContainer />
          <SidebarContainer />
          <div className='content'>
            <Route exact path='/' component={DefaultMain} />
            <Route path='/login' component={LoginContainer} />
            <Route path='/profile/:userId?' component={ProfileContainer} />
            <Route path='/dialogs' component={DialogsContainer} />
            <Route path='/users' component={UsersContainer} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
      </div>
    );
    else return <Preloader style={{ height: '100%', width: '100%', backgroundColor: '#fff' }} />;
  }
};

const mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized
});
const actions = {
  initializeApp
};

export default compose(withRouter, connect(mapStateToProps, actions))(App);