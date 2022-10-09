import "../styles/globals.css";
import { Provider } from "react-redux";
import { wrapper } from "../Redux/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
