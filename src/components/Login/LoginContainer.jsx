import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../redux/reducers/authReducer';
import Login from './Login';

class LoginContainer extends React.Component {
   render() {
      let redirectPath = (!this.props.location.state) ? '/profile' : this.props.location.state.referrer;
      if (this.props.isAuth) return <Redirect to={redirectPath} />
      else
         return <Login {...this.props} />;
   }
}

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   captchaUrl: state.auth.captchaUrl
});

const actions = { login, };

export default connect(mapStateToProps, actions)(LoginContainer);