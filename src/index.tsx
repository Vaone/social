import ReactDOM from "react-dom";
import { GlobalStyle } from "./styles/Global.styled";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
import 'antd/dist/antd.css';
import AppContainer from "./AppContainer";

export const renderTree = () => {
  ReactDOM.render(
    <>
      <Provider store={store}>
        <AppContainer />
      </Provider>
      <GlobalStyle />
    </>,
    document.getElementById("root")
  );
}

store.subscribe(renderTree)

renderTree()
