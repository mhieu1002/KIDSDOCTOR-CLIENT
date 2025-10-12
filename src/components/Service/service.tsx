import "./service.scss";
import noiNhi from "../../assets/noi-nhi-1.jpg";
import ngoaiNhi from "../../assets/ngoai-nhi-2.jpg";
import dinhDuong from "../../assets/dinh-duong-1.jpg";
import khiDung from "../../assets/phun-khi-dung-1.jpg";
import ruaMui from "../../assets/hut-dam-nhot1.jpg";
import vltl from "../../assets/vat-ly.jpg";
import thayBang from "../../assets/rua-vet-thuong-1.jpg";
import quiDau from "../../assets/nong-dau-1.jpg";
import chamRon from "../../assets/cham-ron.jpg";

export default function Service() {
  const services = [
    {
      id: 1,
      name: "KHÁM NỘI NHI",
      specialty: "Bác sĩ Bệnh viện Nhi Đồng 2",
      skills: "Chuyên khoa Tiêu hóa - Gan mật.",
      img: noiNhi,
    },
    {
      id: 2,
      name: "KHÁM VÀ TƯ VẤN NGOẠI NHI",
      specialty: "Bác sĩ Bệnh viện Nhi Đồng 2",
      skills: "Chuyên khoa Hô hấp - Miễn dịch.",
      img: ngoaiNhi,
    },
    {
      id: 3,
      name: "KHÁM VÀ TƯ VẤN DINH DƯỠNG",
      specialty: "Bác sĩ chuyên khoa",
      skills: "Chuyên khoa Nhi tổng quát.",
      img: dinhDuong,
    },
    {
      id: 4,
      name: "PHUN KHÍ DUNG",
      specialty: "Bác sĩ chuyên khoa",
      skills: "Chuyên khoa Nhi tổng quát.",
      img: khiDung,
    },
    {
      id: 5,
      name: "RỬA MŨI - HÚT ĐÀM NHỚT",
      specialty: "Bác sĩ chuyên khoa",
      skills: "Chuyên khoa Nhi tổng quát.",
      img: ruaMui,
    },
    {
      id: 6,
      name: "VẬT LÝ TRỊ LIỆU, HÔ HẤP TẠI NHÀ - LIÊN HỆ",
      specialty: "Bác sĩ chuyên khoa",
      skills: "Chuyên khoa Nhi tổng quát.",
      img: vltl,
    },
    {
      id: 7,
      name: "RỬA VẾT THƯƠNG - THAY BĂNG, CẮT CHỈ",
      specialty: "Bác sĩ chuyên khoa",
      skills: "Chuyên khoa Nhi tổng quát.",
      img: thayBang,
    },
    {
      id: 8,
      name: "NONG BAO QUI ĐẦU",
      specialty: "Bác sĩ chuyên khoa",
      skills: "Chuyên khoa Nhi tổng quát.",
      img: quiDau,
    },
    {
      id: 9,
      name: "CHẤM POLYP RỐN",
      specialty: "Bác sĩ chuyên khoa",
      skills: "Chuyên khoa Nhi tổng quát.",
      img: chamRon,
    },
  ];

  return (
    <section className="service-team">
      <div className="container">
        <div className="heading">
          <h2>Dịch Vụ Khám Bệnh</h2>
          {/* <p>Bé được chăm sóc bởi những bác sĩ hàng đầu</p> */}
          <div className="line"></div>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-img">
                <img src={service.img} alt={service.name} />
              </div>
              <div className="service-info">
                <h3>{service.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
