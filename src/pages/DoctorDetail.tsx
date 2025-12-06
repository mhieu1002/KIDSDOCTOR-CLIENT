import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { BASE_URL } from "../constants";
import "../styles/doctorDetail.scss";

export default function DoctorDetail() {
  const { slug } = useParams();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const id = slug.split("-")[0];
    axios
      .get(`${BASE_URL.BASE_URL}/doctor/${id}`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.error("Lỗi khi lấy thông tin bác sĩ:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div>Đang tải thông tin bác sĩ...</div>;
  if (!doctor) return <div>Không tìm thấy thông tin bác sĩ.</div>;

  const info = doctor.data;

  const fullUrl = `https://kidsdoctor.vn/bac-si/${slug}`;
  const imageUrl = `${BASE_URL.BASE_URL_IMAGE}${info.image}`;

  const shortIntro =
    info.introduce?.split("\n")[0].slice(0, 150) +
    (info.introduce?.length > 150 ? "..." : "");

  const renderTextBlock = (text: string) =>
    text
      ?.split("\n")
      .filter((line) => line.trim() !== "")
      .map((line, index) => (
        <p key={index} className="bullet-line">
          {line}
        </p>
      ));

  return (
    <div className="doctor-detail container">
      {/* ⭐ SEO PHẦN NÀY ⭐ */}
      <Helmet>
        <title>{info.name} - Bác sĩ Phòng khám Nhi KidsDoctor</title>

        <meta name="description" content={shortIntro} />

        <meta
          name="keywords"
          content={`Bác sĩ ${info.name}, bác sĩ nhi, phòng khám nhi, KidsDoctor, bác sĩ giỏi cho bé`}
        />

        {/* Open Graph cho Facebook */}
        <meta property="og:title" content={`Bác sĩ ${info.name} - KidsDoctor`} />
        <meta property="og:description" content={shortIntro} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={`Bác sĩ ${info.name}`} />
        <meta name="twitter:description" content={shortIntro} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical URL */}
        <link rel="canonical" href={fullUrl} />
      </Helmet>

      {/* --- BODY PAGE --- */}
      <div className="doctor-detail-card">
        <div className="doctor-info">
          <h2>{info.name}</h2>
          <h4>PROFILE CÁ NHÂN</h4>

          <div className="section">
            <h3>Giới thiệu</h3>
            {renderTextBlock(info.introduce)}
          </div>

          <div className="section">
            <h3>Chuyên khoa</h3>
            {renderTextBlock(info.displaySpecialty)}
          </div>

          <div className="section">
            <h3>Quá trình đào tạo</h3>
            {renderTextBlock(info.trainProcess)}
          </div>

          <div className="section">
            <h3>Kinh nghiệm làm việc</h3>
            {renderTextBlock(info.experience)}
          </div>

          <div className="section">
            <h3>Thế mạnh chuyên môn</h3>
            {renderTextBlock(info.strength)}
          </div>
        </div>
      </div>
    </div>
  );
}
