import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Scroll from "./components/Scroll/scroll";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/linh-vuc" element={<div>Lĩnh vực</div>} />
          <Route path="/kien-thuc-y-hoc" element={<div>Kiến thức y học</div>} />
          <Route path="/hoi-dap" element={<div>Hỏi đáp</div>} />
          <Route path="/lien-he" element={<div>Liên hệ</div>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Scroll />
    </BrowserRouter>
  );
}
