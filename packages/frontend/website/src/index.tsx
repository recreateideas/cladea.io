import "./app/ui-core/theme/GlobalStyle/roboto.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux";
import { ServicedApp, ThemeProviderConnected } from "./app";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProviderConnected>
      <ServicedApp />
    </ThemeProviderConnected>
  </Provider>,
  document.getElementById("root")
);
