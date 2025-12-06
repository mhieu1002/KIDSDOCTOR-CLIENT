import { Helmet } from "react-helmet-async";
import Service from "../components/Service/service";

export default function MedicalServices() {
  const pageUrl = "https://kidsdoctor.vn/dich-vu-y-te";
  const ogImage = "https://kidsdoctor.vn/og-dich-vu-y-te.jpg"; // nên đặt 1 ảnh đại diện

  return (
    <>
      {/* ⭐ SEO CHO TRANG DỊCH VỤ Y TẾ ⭐ */}
      <Helmet>
        <title>Dịch Vụ Y Tế - Phòng khám Nhi KidsDoctor</title>

        <meta
          name="description"
          content="Tổng hợp các dịch vụ y tế tại Phòng khám Nhi KidsDoctor: khám nhi, tư vấn sức khỏe, xét nghiệm, điều trị, chăm sóc trẻ toàn diện bởi đội ngũ bác sĩ Nhi Đồng 2."
        />

        <meta
          name="keywords"
          content="dịch vụ y tế, khám nhi, phòng khám nhi, KidsDoctor, bác sĩ nhi đồng 2, khám bệnh cho bé"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Dịch Vụ Y Tế - KidsDoctor" />
        <meta
          property="og:description"
          content="Các dịch vụ khám chữa bệnh dành cho trẻ em tại Phòng khám Nhi KidsDoctor – đội ngũ bác sĩ chuyên khoa Nhi, giàu kinh nghiệm."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Dịch Vụ Y Tế - KidsDoctor" />
        <meta
          name="twitter:description"
          content="Dịch vụ khám và chăm sóc sức khỏe trẻ em bởi bác sĩ chuyên khoa Nhi."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      {/* ⭐ Nội dung trang */}
      <div className="p-4">
        <Service />
      </div>
    </>
  );
}
