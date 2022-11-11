import React, { component }  from "react";
import { Navigate } from "react-router-dom";
import {connect} from 'react-redux';

let mapStateToPropsFoRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Navigate to='/login' />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsFoRedirect) (RedirectComponent);

    return ConnectedAuthRedirectComponent
}