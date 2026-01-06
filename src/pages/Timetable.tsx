import { Helmet } from "react-helmet-async";
import Carousel from "../components/Carousel/carousel";
import "../styles/timetable.scss";

export default function Timetable() {
  const pageTitle = "Lịch Khám Bệnh | KidsDoctor Quận 9";
  const description =
    "Xem lịch khám bệnh của các bác sĩ tại Phòng khám Nhi KidsDoctor Quận 9. Cập nhật nhanh – Chính xác – Dễ theo dõi.";
  const canonicalUrl = "https://kidsdoctor.vn/lich-kham-benh";
  const ogImage = "https://kidsdoctor.vn/og-kidsdoctor.jpg";

  return (
    <div>
      {/* ⭐⭐ SEO ⭐⭐ */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="lịch khám bệnh, bác sĩ nhi, kidsdoctor, quận 9, lịch khám nhi"
        />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="p-4">
        <Carousel />

        <div className="calendar-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FHo_Chi_Minh&mode=AGENDA&showNav=0&showPrint=0&showCalendars=0&showTz=0&showTitle=0&src=cGhvbmdraGFta2lkc2RvY3RvckBnbWFpbC5jb20&color=%23e67c73"
            style={{ border: "1px solid #e5e7eb", borderRadius: 8 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Lịch khám KidsDoctor"
          />
        </div>
      </div>
    </div>
  );
}
