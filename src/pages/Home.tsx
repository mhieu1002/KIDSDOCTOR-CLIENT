import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel/carousel";
import AboutSection from "../components/About/aboutSection";
import DoctorTeam from "../components/Doctor/doctor";
import Service from "../components/Service/service";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Phòng khám Nhi KidsDoctor</title>
        <meta
          name="description"
          content="Phòng khám Nhi KidsDoctor - địa chỉ chăm sóc sức khỏe trẻ em uy tín tại TP. Hồ Chí Minh. Đội ngũ bác sĩ giàu kinh nghiệm từ Bệnh viện Nhi Đồng 2. Đặt lịch khám nhanh chóng, tiện lợi."
        />
        <meta
          name="keywords"
          content="phòng khám nhi, bác sĩ nhi đồng, kids doctor, khám nhi, phòng khám trẻ em, bác sĩ nhi đồng 2, đặt lịch khám nhi"
        />
        <meta name="author" content="Phòng khám Nhi KidsDoctor" />
        <meta property="og:title" content="Phòng khám Nhi KidsDoctor" />
        <meta
          property="og:description"
          content="Phòng khám chuyên khoa Nhi với đội ngũ bác sĩ từ Bệnh viện Nhi Đồng 2 - tận tâm, chuyên nghiệp và thân thiện với trẻ nhỏ."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.kidsdoctor.vn/" />
        <meta property="og:image" content="/logo192.png" />
        <link rel="canonical" href="https://www.kidsdoctor.vn/" /> */}
      </Helmet>

      <div className="p-4">
        <Carousel />
      </div>
      <AboutSection />
      <DoctorTeam />
      <Service />
    </div>
  );
}
