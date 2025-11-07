import { useParams, Link } from "react-router-dom";
import { useMedicine } from "../hooks/useMedicine";
import { BASE_URL } from "../constants";
import "../styles/pharmacyDetail.scss";

export default function PharmacyDetail() {
  const { id } = useParams();

  const { medicine, isLoading } = useMedicine({ id: Number(id) });

  const data = medicine?.data || null;

  if (isLoading)
    return <p style={{ textAlign: "center", marginTop: 40 }}>⏳ Đang tải...</p>;

  if (!data)
    return (
      <p style={{ textAlign: "center", marginTop: 40 }}>❌ Không tìm thấy thuốc</p>
    );

  return (
    <div className="medicine-detail-container">
      <Link to="/nha-thuoc" className="back-btn">
        ← Quay lại
      </Link>

      <div className="medicine-detail">
        <div className="image-section">
          <img src={`${BASE_URL.BASE_URL_IMAGE}${data.image}`} alt={data.name} />
        </div>

        <div className="info-section">
          <h2>{data.name}</h2>

          <p><strong>Nhóm:</strong> {data.group?.name}</p>
          <p><strong>Xuất xứ:</strong> {data.manufacturingCountry}</p>
          <p><strong>Dạng bào chế:</strong> {data.dosageForm}</p>
          <p><strong>Quy cách:</strong> {data.packaging}</p>
          <p><strong>Thành phần:</strong> {data.composition}</p>
        </div>
      </div>

      <div className="content-section">
        <h3>Mô tả</h3>
        <p>{data.description}</p>

        <h3>Chỉ định</h3>
        <p>{data.indications}</p>

        <h3>Liều dùng</h3>
        <p>{data.dosage}</p>

        <h3>Chống chỉ định</h3>
        <p>{data.contraindications}</p>
      </div>
    </div>
  );
}
