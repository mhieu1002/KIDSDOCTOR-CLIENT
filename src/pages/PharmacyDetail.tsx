import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMedicine } from "../hooks/useMedicine";
import { BASE_URL } from "../constants";
import "../styles/pharmacyDetail.scss";

export default function PharmacyDetail() {
  const { id } = useParams();
  const { medicine, isLoading } = useMedicine({ id: Number(id) });

  const data = medicine?.data || null;

  // Nếu đang tải
  if (isLoading)
    return <p style={{ textAlign: "center", marginTop: 40 }}>⏳ Đang tải...</p>;

  // Nếu không có dữ liệu
  if (!data)
    return (
      <p style={{ textAlign: "center", marginTop: 40 }}>
        ❌ Không tìm thấy thuốc
      </p>
    );

  const pageUrl = `https://kidsdoctor.vn/thuoc/${id}`;
  const ogImage = `${BASE_URL.BASE_URL_IMAGE}${data.image}` || "/default-og.jpg";

  return (
    <div className="medicine-detail-container">
      {/* ⭐⭐ SEO CHO TRANG CHI TIẾT THUỐC ⭐⭐ */}
      <Helmet>
        <title>{data.name} - Thông tin chi tiết thuốc | DR.HEALTHYCARE</title>

        <meta
          name="description"
          content={`Thông tin thuốc ${data.name}: công dụng, thành phần, chỉ định, liều dùng và chống chỉ định. Tư vấn bởi dược sĩ DR.HEALTHYCARE.`}
        />

        <meta
          name="keywords"
          content={`${data.name}, thuốc ${data.name}, thông tin thuốc, nhà thuốc DR.HEALTHYCARE`}
        />

        {/* Open Graph cho Facebook */}
        <meta property="og:title" content={`${data.name} - Thông tin thuốc`} />
        <meta
          property="og:description"
          content={`Xem chi tiết thuốc ${data.name}: xuất xứ ${data.manufacturingCountry}, quy cách ${data.packaging}, chỉ định, liều dùng và chống chỉ định.`}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:title" content={`${data.name} - DR.HEALTHYCARE`} />
        <meta
          name="twitter:description"
          content={`Thông tin chi tiết thuốc ${data.name}, tư vấn bởi DR.HEALTHYCARE.`}
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      <Link to="/nha-thuoc" className="back-btn">
        ← Quay lại
      </Link>

      <div className="medicine-detail">
        <div className="image-section">
          <img src={`${BASE_URL.BASE_URL_IMAGE}${data.image}`} alt={data.name} />
        </div>

        <div className="info-section">
          <h2>{data.name}</h2>

          <p>
            <strong>Nhóm:</strong> {data.group?.name}
          </p>
          <p>
            <strong>Xuất xứ:</strong> {data.manufacturingCountry}
          </p>
          <p>
            <strong>Dạng bào chế:</strong> {data.dosageForm}
          </p>
          <p>
            <strong>Quy cách:</strong> {data.packaging}
          </p>
          <p>
            <strong>Thành phần:</strong> {data.composition}
          </p>
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
