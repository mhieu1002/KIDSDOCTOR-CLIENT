import "./aboutSection.scss";
import logo from "../../assets/logo.png";
import hinhPK from "../../assets/hinh-phong-kham.jpg";

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
              <h2>Phòng Khám Chuyên Khoa Nhi KidsDoctor</h2>
              <img
                src={logo}
                alt="logo Kids Doctor"
                style={{ width: "200px" }}
              />
            </div>
            <p>
              <strong>PHÒNG KHÁM NHI KIDS DOCTOR</strong> gồm các Bác sĩ đang
              công tác tại{" "}
              <strong>Bệnh viện NHI ĐỒNG 1, Bệnh viện NHI ĐỒNG 2,</strong> có
              kinh nghiệm khám, chữa bệnh lâu năm cho cả trẻ em và trẻ sơ sinh,
              chúng tôi hiểu và chia sẻ những nỗi lo của ông bà/cha mẹ khi trẻ
              bệnh, những khó chịu trẻ phải trải qua, và từng giai đoạn phát
              triển của trẻ. Với đầy đủ Chuyên ngành{" "}
              <strong>
                HÔ HẤP, TIÊU HOÁ, THẬN TIẾT NIỆU, HEN – DỊ ỨNG, TƯ VẤN DINH
                DƯỠNG – CHỦNG NGỪA;
              </strong>{" "}
              cùng đầy đủ phương tiện khám bệnh cũng như khu vui chơi rộng rãi,
              thoáng mát, hệ thống lưu trữ thông tin về tình trạng sức khỏe của
              trẻ, chúng tôi hi vọng sẽ là nơi chăm sóc sức khỏe toàn diện cho
              con của bạn.
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
