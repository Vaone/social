import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';
// import { T_AuthResponseData } from '../api/Api';
import { AuthUserType, logoutTC } from '../redux/auth-reducer';
import { RootState } from '../redux/redux-store';
import Header from './Header';

const mapStateProps = (state: RootState): MapStatePropsType => ({
  user: state.authUser
});

const HeadersContainer = compose<React.ComponentType>(connect(mapStateProps, { logoutTC }), withRouter)(Header);

export default HeadersContainer;

type MapStatePropsType = {
  user: AuthUserType;
};
type MapDispatchPropsType = {
  logoutTC: () => void;
};
export type HeadersPropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps;
