import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-wrapper">
          <div className="footer-content">
            <h2>Phòng Khám Chuyên Khoa Nhi Kids Doctor</h2>
            <p>
              Địa chỉ: Phòng khám Nhi Kids Doctor, 136 Đường Số 6, Phường Long
              Trường, Thành phố Hồ Chí Minh
            </p>
            <p>
              Số điện thoại phòng khám:{" "}
              <a
                href="tel:0878879188"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                0878 879 188
              </a>
            </p>
          </div>

          <div className="footer-map">
            <iframe
              title="Kids Doctor Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.108942996243!2d106.78891747570344!3d10.802967458702247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527b54301cd91%3A0xd9b5ee8671fdd1c0!2sPh%C3%B2ng%20kh%C3%A1m%20Nhi%20Kids%20Doctor!5e0!3m2!1svi!2s!4v1760171337571!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2025 © Phòng Khám Nhi Kids Doctor</p>
      </div>
    </footer>
  );
}
