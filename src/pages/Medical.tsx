import noiNhi from "../assets/noi-nhi-1.jpg";
import ngoaiNhi from "../assets/ngoai-nhi-2.jpg";
import dinhDuong from "../assets/dinh-duong-1.jpg";
import khiDung from "../assets/phun-khi-dung-1.jpg";
// import ruaMui from "../assets/hut-dam-nhot1.jpg";
import vltl from "../assets/vat-ly.jpg";
import thayBang from "../assets/rua-vet-thuong-1.jpg";
import quiDau from "../assets/nong-dau-1.jpg";
import chamRon from "../assets/cham-ron.jpg";
import "../styles/medical.scss";
export default function Medical() {
  const medicals = [
    {
      id: 1,
      name: "KHÁM NỘI NHI",
      content: `
        <p><img src={noiNhi} /></p>
        <p>Khám, chẩn đoán và điều trị các bệnh lý nội khoa ở trẻ em như hô hấp, tiêu hóa...</p>
      `,
      skills: "Chuyên khoa Tiêu hóa - Gan mật.",
      img: noiNhi,
    },
    {
      id: 2,
      name: "KHÁM VÀ TƯ VẤN NGOẠI NHI",
      content: `
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
      `,
      skills: "Chuyên khoa Hô hấp - Miễn dịch.",
      img: ngoaiNhi,
    },
    {
      id: 3,
      name: "KHÁM VÀ TƯ VẤN DINH DƯỠNG",
      content: `
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
      `,
      skills: "Chuyên khoa Nhi tổng quát.",
      img: dinhDuong,
    },
    {
      id: 4,
      name: "PHUN KHÍ DUNG",
      content: `
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
      `,
      skills: "Chuyên khoa Nhi tổng quát.",
      img: khiDung,
    },
    {
      id: 6,
      name: "VẬT LÝ TRỊ LIỆU, HÔ HẤP TẠI NHÀ - LIÊN HỆ",
      content: `
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
      `,
      skills: "Chuyên khoa Nhi tổng quát.",
      img: vltl,
    },
    {
      id: 7,
      name: "RỬA VẾT THƯƠNG - THAY BĂNG, CẮT CHỈ",
      content: `
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
      `,
      skills: "Chuyên khoa Nhi tổng quát.",
      img: thayBang,
    },
    {
      id: 8,
      name: "NONG BAO QUI ĐẦU",
      content: `
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
      `,
      skills: "Chuyên khoa Nhi tổng quát.",
      img: quiDau,
    },
    {
      id: 9,
      name: "CHẤM POLYP RỐN",
      content: `
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
        <p>Đánh giá tình trạng dinh dưỡng của trẻ, tư vấn chế độ ăn hợp lý giúp bé phát triển toàn diện.</p>
      `,
      skills: "Chuyên khoa Nhi tổng quát.",
      img: chamRon,
    },
  ];

  const stripLeadingImages = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Xóa tất cả thẻ <img> ở phần đầu
    const imgs = doc.querySelectorAll("img");
    imgs.forEach((img) => img.parentElement?.removeChild(img));

    return doc.body.innerHTML;
  };

  return (
    <section className="medical-team">
      <div className="container">
        <div className="heading">
          <h2>Kiến Thức Y Khoa</h2>
          {/* <p>Bé được chăm sóc bởi những bác sĩ hàng đầu</p> */}
          <div className="line"></div>
        </div>

        <div className="medical-list">
          {medicals.map((medical) => (
            <div className="medical-card" key={medical.id}>
              <div className="medical-img">
                <img src={medical.img} alt={medical.name} />
              </div>
              <div className="medical-info">
                <h3>{medical.name}</h3>
                {medical.content && (
                  <p
                    className="medical-desc"
                    dangerouslySetInnerHTML={{
                      __html: stripLeadingImages(medical.content),
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
