import { useState } from "react";
import { useNavigate } from "react-router-dom";
import nhaThuoc from "../assets/Nha-thuo.jpg";
import "../styles/pharmacy.scss";
import { useMedicine } from "../hooks/useMedicine";
import { useMedicineGroup } from "../hooks/useMedicineGroup";
import { BASE_URL } from "../constants";

export default function Pharmacy() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [page] = useState(1);

  // ✅ Lấy danh mục thuốc từ API
  const { medicineGroups } = useMedicineGroup({
    page: 1,
    pageSize: 100,
    keyword: "",
  });

  const categories = [
    "Tất cả",
    ...(medicineGroups?.data.allMedicineGroups.map((g: any) => g.name) || []),
  ];

  // ✅ Lấy danh sách thuốc từ API
  const { medicines, isLoading } = useMedicine({
    page,
    pageSize: 100,
    keyword: search,
  });

  const productList = medicines?.data.allMedicine || [];

  // ✅ Lọc theo category đúng key `group.name`
  const filteredProducts = productList.filter(
    (p: any) =>
      p.status === true && // 👈 chỉ lấy thuốc có status = true
      (selectedCategory === "Tất cả" || p.group?.name === selectedCategory)
  );

  return (
    <>
      {/* Giới thiệu nhà thuốc */}
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

      {/* Danh sách thuốc */}
      {/* Danh sách thuốc */}
      <section className="pharmacy-section">
        <div className="heading">
          <h2>Sản phẩm Thuốc</h2>
          <div className="line"></div>
        </div>
        <div className="pharmacy-container fix-pharamacy">
          {/* Sidebar */}

          <aside className="sidebar">
            <h3>Danh mục thuốc</h3>

            {/* Dropdown cho Tablet/Mobile */}
            <div className="category-select-mobile">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Input search */}
            <input
              type="text"
              placeholder="Tìm tên thuốc..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Menu Desktop */}
            <ul className="category-list">
              {categories.map((cat) => (
                <li
                  key={cat}
                  className={selectedCategory === cat ? "active" : ""}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>

          {/* List sản phẩm */}
          <div className="product-list">
            {isLoading && <p>⏳ Đang tải thuốc...</p>}
            {!isLoading && filteredProducts.length === 0 && (
              <p>⚠ Không có sản phẩm phù hợp</p>
            )}

            {filteredProducts.map((p: any) => (
              <div className="product-card" key={p.id}>
                <div className="img-box">
                  <img
                    src={`${BASE_URL.BASE_URL_IMAGE}${p.image}`}
                    alt={p.title}
                  />
                </div>
                <div className="product-info">
                  <h4>{p.name}</h4>

                  {/* ✅ sửa field đúng theo API */}
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
      </section>
    </>
  );
}
