import "./aboutSection.scss";
import logo from "../../assets/logo.png";
import hinhPK from "../../assets/hinh-phong-kham.png";

export default function AboutSection() {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-image">
            <img src={hinhPK} alt="Phòng khám Nhi Kids Doctor" />
            <div className="bg-shape"></div>
          </div>
          <div className="about-content">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2>Phòng Khám Nhi Kids Doctor</h2>
              <img
                src={logo}
                alt="logo Kids Doctor"
                style={{ width: "200px" }}
              />
            </div>
            <p>
              <strong>PHÒNG KHÁM NHI KIDS DOCTOR</strong> quy tụ các bác sĩ giàu
              kinh nghiệm từ
              <strong> Bệnh viện Nhi Đồng 1 và Nhi Đồng 2, </strong> chuyên khám
              và điều trị cho trẻ sơ sinh – trẻ nhỏ.
            </p>
            <p>
              Chúng tôi cung cấp các dịch vụ chuyên sâu:{" "}
              <strong>
                Hô hấp, Tiêu hoá, Thận – Tiết niệu, Hen – Dị ứng miễn dịch, Tư
                vấn Dinh dưỡng và Tiêm chủng.
              </strong>
            </p>
            <p>
              Phòng khám được thiết kế{" "}
              <strong>thân thiện – thoáng mát – có khu vui chơi, </strong> giúp
              bé thoải mái khi thăm khám. Hệ thống lưu trữ thông tin sức khỏe
              hiện đại hỗ trợ theo dõi lâu dài.
            </p>
            <p>
              <strong>
                Kids Doctor – Nơi đồng hành chăm sóc sức khỏe toàn diện cho trẻ.
              </strong>
            </p>
          </div>
        </div>
      </section>
      {/* <section className="about-section" style={{ backgroundColor: "#fff" }}>
        <div className="about-container">
          <div className="about-content">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h2>Nhà thuốc Tây DR.HEALTHYCARE</h2>
              <img
                src={logo}
                alt="logo Kids Doctor"
                style={{ width: "200px" }}
              />
            </div>
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
            <img src={nhaThuoc} alt="Phòng khám Nhi Kids Doctor" />
            <div className="bg-shape"></div>
          </div>
        </div>
      </section> */}
    </>
  );
}
