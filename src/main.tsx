import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import vi_VN from "antd/locale/vi_VN";
import App from "./App.tsx";
import "antd/dist/reset.css";
import "./styles/index.scss";
import { ConfigProvider } from "antd";
import { kidsTheme } from "./themes/antdTheme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fortawesome/fontawesome-free/css/all.min.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={vi_VN} theme={kidsTheme}>
        <App />
      </ConfigProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
