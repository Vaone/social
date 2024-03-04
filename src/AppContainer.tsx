import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import App from "./App";
import { RootState } from "./redux/redux-store";
import { getAuthTC } from "./redux/auth-reducer";


class AppApiContainer extends React.Component<AppPropsType> {
  componentDidMount() {
    this.props.getAuthTC();
  }

  render() {
    const isInitialized = this.props.isInitialized
    return <App isInitialized={isInitialized} />;
  }
}

export type AppMapStateToPropsType = {
  isInitialized: boolean
}
type MapDispatchToPropsType = {
  getAuthTC: () => void;
}
type AppPropsType = AppMapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: RootState): AppMapStateToPropsType => ({
  isInitialized: state.anyPage.isInitialized
})

const AppContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { getAuthTC }),
)(AppApiContainer)

export default AppContainer;