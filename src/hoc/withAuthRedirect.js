import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const withAuthRedirect = (Component) => {
   class RedirectComponent extends React.Component {
      render() {
         if (!this.props.isAuth) return <Redirect to={{ pathname: '/login', state: { referrer: this.props.currentLocation } }} />;
         return <Component {...this.props} />
      }
   }
   const mapStateToProps = (state) => ({
      isAuth: state.auth.isAuth
   });
   return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;