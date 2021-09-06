import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducers/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
   render() {
      return (
         <Header {...this.props} />
      );
   }
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login
});

const actions = {
   logout
};

export default connect(mapStateToProps, actions)(HeaderContainer);