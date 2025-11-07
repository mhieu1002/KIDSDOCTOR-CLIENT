import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Scroll from "./components/Scroll/scroll";
import Timetable from "./pages/Timetable";
import Contact from "./pages/Contact";
import MedicalServices from "./pages/MedicalServices";
import Medical from "./pages/Medical";
import DoctorDetail from "./pages/DoctorDetail";
import Pharmacy from "./pages/Pharmacy";
import PostDetail from "./pages/PostDetail";
import MedicineDetail from "./pages/PharmacyDetail";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lich-kham-benh" element={<Timetable />} />
          <Route path="/kien-thuc-y-khoa" element={<Medical />} />
          <Route path="/dich-vu-y-te" element={<MedicalServices />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/nha-thuoc" element={<Pharmacy />} />
          <Route path="/bac-si/:slug" element={<DoctorDetail />} />
          <Route path="/bai-viet/:slug" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/thuoc/:id" element={<MedicineDetail />} />
        </Route>
      </Routes>
      <Scroll />
    </BrowserRouter>
  );
}
