import "./carousel.scss";
import banner from "../../assets/carousel.png";

export default function AppointmentSection() {
  return (
    <section className="appointment-section">
      <div className="banner">
        <img src={banner} alt="Doctor and Kid" className="banner-bg" />
        <a
          href="https://zalo.me/0878879188"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="book-btn">Đặt Lịch Khám →</button>
        </a>
      </div>

      <div className="open-time-card" id="lich-kham-benh">
        <h2>Giờ Mở Cửa</h2>
        <div className="time-list">
          <div className="time-item">
            <span className="icon">🩺</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <strong>Phòng Khám Nhi KIDS DOCTOR</strong>
              <p>
                Thời gian khám: <strong>17:00 – 20:00 (T2 - CN)</strong>
              </p>
              <p style={{ textAlign: "end", fontWeight: "700" }}>
                08:00 – 11:00 (T7 - CN)
              </p>
            </div>
          </div>
          <div className="time-item">
            <span className="icon">💊</span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <strong>Nhà Thuốc DR.HEALTHYCARE</strong>
              <p>
                Thời gian mở cửa: <strong>07:30 – 20:00 (T2 - T7)</strong>
              </p>
              <p style={{ textAlign: "end", fontWeight: "700" }}>
                08:00 – 11:00 & 17:00 - 20:00 (CN)
              </p>
            </div>
          </div>
        </div>
        <div className="note-box">
          <p>
            <span className="highlight">Phụ huynh vui lòng</span> thực hiện{" "}
            <strong style={{ color: "#e72929" }}>“Đặt lịch khám”</strong>, giúp
            chủ động khám theo từng khung giờ. Xin cảm ơn!
          </p>
        </div>
      </div>
    </section>
  );
}
