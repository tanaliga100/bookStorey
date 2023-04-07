import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "./App";
import store from "./components/store/store";
import "./index.css";
import theme from "./theme/theme";
const root = document.getElementById("root");

createRoot(root).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </ThemeProvider>
);
