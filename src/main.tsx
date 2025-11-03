import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import vi_VN from "antd/locale/vi_VN";
import App from "./App.tsx";
import "antd/dist/reset.css";
import "./styles/index.scss";
import { ConfigProvider } from "antd";
import { kidsTheme } from "./themes/antdTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ConfigProvider locale={vi_VN} theme={kidsTheme}>
      <App />
    </ConfigProvider>
  </HelmetProvider>
);
