import { useState } from "react";
import { useNavigate } from "react-router-dom";
import nhaThuoc from "../assets/Nha-thuo.jpg";
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
  const pageSize = 32; // mỗi trang chứa 32 sản phẩm

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

  const productList = medicines?.data.allMedicine || [];

  // Lọc sản phẩm
  const filteredProducts = productList.filter(
    (p: any) =>
      p.status === true &&
      p.group?.status === true &&
      (selectedCategory === "Tất cả" || p.group?.name === selectedCategory)
  );

  // Reset về trang 1 khi đổi danh mục hoặc tìm kiếm
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // Cắt phân trang
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedProducts = filteredProducts.slice(start, end);

  return (
    <>
      {/* Info */}
      <section className="about-section" style={{ backgroundColor: "#fff" }}>
        <div className="about-container">
          <div className="about-content">
            <h2>Nhà thuốc Tây DR.HEALTHYCARE</h2>
            <p>
              <strong>Nhà thuốc Tây DR.HEALTHYCARE</strong> với các{" "}
              <strong>Dược sĩ Đại học</strong> tư vấn trực tiếp cùng toàn thể
              điều dưỡng nhiều kinh nghiệm, tâm huyết và yêu trẻ, sẽ mang đến
              chất lượng phục vụ ngoài mong đợi cho quý vị{" "}
              <strong>Nhà thuốc tây DR.HEALTHYCARE</strong> phục vụ sức khỏe
              cộng đồng (người lớn và trẻ em) với chất lượng tốt nhất và giá cả
              hợp lý. Đội ngũ nhân viên, tư vấn, trình dược viên tại nhà thuốc
              đều là những người có trình độ chuyên môn sâu được đào tạo bài bản
              tại <strong>trường ĐH Y Dược TPHCM</strong> và có kinh nghiệm lâu
              năm trong ngành Dược.
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
          {/* Sidebar */}
          <aside className="sidebar">
            <h3>Danh mục thuốc</h3>

            {/* Dropdown mobile */}
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

            {/* Tìm kiếm */}
            <input
              type="text"
              placeholder="Tìm tên thuốc..."
              value={search}
              onChange={handleSearch}
            />

            {/* Menu Desktop */}
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

          {/* Product List */}
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
        {/* Pagination */}
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
