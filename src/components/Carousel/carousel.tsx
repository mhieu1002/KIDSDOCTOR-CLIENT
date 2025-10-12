import "./carousel.scss";
import banner from "../../assets/carousel.png";

export default function AppointmentSection() {
  return (
    <section className="appointment-section">
      <div className="banner">
        <img src={banner} alt="Doctor and Kid" className="banner-bg" />
        <button className="book-btn">Đặt Lịch Khám →</button>
      </div>

      <div className="open-time-card" id="lich-kham-benh">
        <h2>Giờ Mở Cửa</h2>
        <div className="time-list">
          <div className="time-item">
            <span className="icon">📅</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <strong>Thứ Hai đến Thứ Bảy</strong>
              <p>Thời gian khám từ: 17h00 – 20h00</p>
            </div>
          </div>
          {/* <div className="time-item">
            <span className="icon">🕒</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <strong>Chủ Nhật</strong>
              <p>Thời gian khám từ: 17h00 – 20h00</p>
            </div>
          </div> */}
        </div>
        <div className="note-box">
          <p>
            <span className="highlight">Bố mẹ các cháu vui lòng</span> thực hiện{" "}
            <strong>“Đặt lịch khám”</strong>, giúp chủ động khám theo từng khung
            giờ. Xin cảm ơn!
          </p>
        </div>
      </div>
    </section>
  );
}
