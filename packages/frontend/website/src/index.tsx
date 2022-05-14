import "./app/ui-core/theme/GlobalStyle/roboto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { App, ThemeProviderConnected } from "./app";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProviderConnected>
      <App />
    </ThemeProviderConnected>
  </Provider>,
  document.getElementById("root")
);
