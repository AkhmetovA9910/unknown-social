import React from "react";
import { Redirect } from "react-router";

const withAuthProfileRedirect = (Component) => {
   class RedirectComponent extends React.Component {
      render() {
         if (this.props.isAuth) {
            if (!this.props.match.params.userId) return <Redirect to={{ pathname: `/profile/${this.props.userId}` }} />;
            else return <Component {...this.props} />;
         }
         else {
            if (!this.props.match.params.userId || this.props.match.params.userId === 'null') return <Redirect to={{ pathname: '/login', state: { referrer: this.props.currentLocation } }} />;
            else return <Component {...this.props} />;
         }
      }
   }
   return RedirectComponent;
};

export default withAuthProfileRedirect;