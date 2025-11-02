import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Scroll from "./components/Scroll/scroll";
import Timetable from "./pages/Timetable";
import Contact from "./pages/Contact";
import MedicalServices from "./pages/MedicalServices";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lich-kham-benh" element={<Timetable />} />
          <Route path="/kien-thuc-y-hoc" element={<div>Kiến thức y học</div>} />
          <Route path="/dich-vu-y-te" element={<MedicalServices />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Scroll />
    </BrowserRouter>
  );
}
