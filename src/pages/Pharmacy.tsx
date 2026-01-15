import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import nhaThuoc from "../assets/hinh-nha-thuoc.png";
import "../styles/pharmacy.scss";
import { useMedicine } from "../hooks/useMedicine";
import { useMedicineGroup } from "../hooks/useMedicineGroup";
import { BASE_URL } from "../constants";
import { Pagination } from "antd";

export default function Pharmacy() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 16;

  const pageUrl = "https://kidsdoctor.vn/nha-thuoc";
  const ogImage = "https://kidsdoctor.vn/og-nha-thuoc.jpg"; // nên đặt 1 ảnh đại diện

  // Lấy danh mục thuốc
  const { medicineGroups } = useMedicineGroup({
    page: 1,
    pageSize: 100,
    keyword: "",
  });

  const categories = [
    "Tất cả",
    ...(medicineGroups?.data.allMedicineGroups
      .filter((g: any) => g.status === true)
      .map((g: any) => g.name) || []),
  ];

  // Lấy danh sách thuốc
  const { medicines, isLoading } = useMedicine({
    page: 1,
    pageSize: 1000,
    keyword: search,
  });

  console.log(medicines);

  const productList = medicines?.data.allMedicine || [];

  // Lọc sản phẩm
  const filteredProducts = productList.filter(
    (p: any) =>
      p.status === true &&
      p.group?.status === true &&
      (selectedCategory === "Tất cả" || p.group?.name === selectedCategory)
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedProducts = filteredProducts.slice(start, end);

  return (
    <>
      {/* ⭐⭐ SEO CHO TRANG NHÀ THUỐC ⭐⭐ */}
      <Helmet>
        <title>
          Nhà Thuốc DR.HEALTHYCARE - Thuốc Chính Hãng & Sản Phẩm Y Tế
        </title>

        <meta
          name="description"
          content="Nhà thuốc DR.HEALTHYCARE cung cấp thuốc chính hãng, sản phẩm y tế an toàn cho trẻ em và người lớn. Đội ngũ dược sĩ Đại học tư vấn tận tâm, uy tín."
        />

        <meta
          name="keywords"
          content="nhà thuốc, nhà thuốc nhi, DR.HEALTHYCARE, thuốc cho bé, thuốc nhi, Kids Doctor, sản phẩm y tế, dược sĩ tư vấn"
        />

        {/* Open Graph cho Facebook */}
        <meta
          property="og:title"
          content="Nhà Thuốc DR.HEALTHYCARE - Thuốc Chính Hãng"
        />
        <meta
          property="og:description"
          content="Thuốc và sản phẩm y tế chính hãng, tư vấn bởi dược sĩ Đại học giàu kinh nghiệm. An toàn – uy tín – tận tâm."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:title" content="Nhà Thuốc DR.HEALTHYCARE" />
        <meta
          name="twitter:description"
          content="Cung cấp thuốc chính hãng, nguồn gốc rõ ràng, tư vấn bởi đội ngũ dược sĩ Đại học."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Canonical */}
        <link rel="canonical" href={pageUrl} />
      </Helmet>

      {/* Info */}
      <section className="about-section" style={{ backgroundColor: "#fff" }}>
        <div className="about-container">
          <div className="about-content">
            <h2>Nhà thuốc DR.HEALTHYCARE</h2>
            <p>
              <strong>
                Nhà thuốc DR.HEALTHYCARE được vận hành bởi Dược sĩ Đại học giàu
                kinh nghiệm và tận tâm. Chúng tôi cung cấp thuốc và sản phẩm y
                tế chính hãng, nguồn gốc minh bạch, hỗ trợ lựa chọn thuốc an
                toàn cho cả người lớn và trẻ em. Không gian nhà thuốc thân
                thiện, phục vụ nhanh chóng và chu đáo. Cam kết mang đến dịch vụ
                chất lượng với giá cả hợp lý.
              </strong>
            </p>
            <p>
              <strong>
                DR.HEALTHYCARE – Đồng hành chăm sóc sức khỏe cho gia đình bạn.
              </strong>
            </p>
          </div>
          <div className="about-image">
            <img src={nhaThuoc} alt="Nhà thuốc DR.HEALTHYCARE" />
          </div>
        </div>
      </section>

      {/* Sản phẩm */}
      <section className="pharmacy-section">
        <div className="heading">
          <h2>Sản phẩm Thuốc</h2>
          <div className="line"></div>
        </div>

        <div className="pharmacy-container fix-pharamacy">
          <aside className="sidebar">
            <h3>Danh mục thuốc</h3>

            <div className="category-select-mobile">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Tìm tên thuốc..."
              value={search}
              onChange={handleSearch}
            />

            <ul className="category-list">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>

          <div className="product-list">
            {isLoading && <p>⏳ Đang tải thuốc...</p>}
            {!isLoading && filteredProducts.length === 0 && (
              <p>⚠ Không có sản phẩm phù hợp</p>
            )}

            {paginatedProducts.map((p: any) => (
              <div className="product-card" key={p.id}>
                <div className="img-box">
                  <img
                    src={`${BASE_URL.BASE_URL_IMAGE}${p.image}`}
                    alt={p.name}
                  />
                </div>
                <div className="product-info">
                  <h4>{p.name}</h4>
                  <p className="pack">Quy cách: {p.packaging}</p>
                  <p className="country">Xuất xứ: {p.manufacturingCountry}</p>
                  {p.price && p.price > 0 ? (
                    <p
                      className="country"
                      style={{
                        color: "#009689",
                        fontWeight: "800",
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      {p.price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </p>
                  ) : (
                    <p
                      className="country"
                      style={{
                        color: "#009689",
                        fontWeight: "700",
                        fontSize: "13px",
                        marginTop: "4px",
                        lineHeight: "1.3"
                      }}
                    >
                      Liên hệ nhà thuốc để biết thêm chi tiết
                    </p>
                  )}
                </div>
                <button
                  className="detail-btn"
                  onClick={() => navigate(`/thuoc/${p.id}`)}
                >
                  Xem chi tiết
                </button>
              </div>
            ))}
          </div>
        </div>

        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredProducts.length}
          onChange={(page) => setCurrentPage(page)}
          className="pagination-box"
        />
      </section>
    </>
  );
}
