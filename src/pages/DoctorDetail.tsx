import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";
import "../styles/doctorDetail.scss";

export default function DoctorDetail() {
  const { slug } = useParams();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // tách id từ slug
    const id = slug.split("-")[0];
    axios
      .get(`${BASE_URL.BASE_URL}/doctor/${id}`)
      .then((res) => setDoctor(res.data))
      .catch((err) => console.error("Lỗi khi lấy thông tin bác sĩ:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div>Đang tải thông tin bác sĩ...</div>;
  if (!doctor) return <div>Không tìm thấy thông tin bác sĩ.</div>;

  // ✅ Hàm render từng đoạn xuống dòng (và bỏ dòng trống)
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
      <div className="doctor-detail-card">
        <div className="doctor-info">
          <h2>{doctor.data.name}</h2>
          <h4>PROFILE CÁ NHÂN</h4>

          <div className="section">
            <h3>Giới thiệu</h3>
            {renderTextBlock(doctor.data.introduce)}
          </div>

          <div className="section">
            <h3>Chuyên khoa</h3>
            {renderTextBlock(doctor.data.displaySpecialty)}
          </div>

          <div className="section">
            <h3>Quá trình đào tạo</h3>
            {renderTextBlock(doctor.data.trainProcess)}
          </div>

          <div className="section">
            <h3>Kinh nghiệm làm việc</h3>
            {renderTextBlock(doctor.data.experience)}
          </div>

          <div className="section">
            <h3>Thế mạnh chuyên môn</h3>
            {renderTextBlock(doctor.data.strength)}
          </div>
        </div>
      </div>
    </div>
  );
}
