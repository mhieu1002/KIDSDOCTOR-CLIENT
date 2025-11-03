import { Helmet } from "react-helmet-async";
import "../styles/contact.scss";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Liên hệ - Phòng khám Nhi KidsDoctor</title>
        <meta
          name="description"
          content="Liên hệ Phòng khám Nhi KidsDoctor để được tư vấn và đặt lịch khám cho bé nhanh chóng. Đội ngũ bác sĩ Nhi nhiều năm kinh nghiệm từ Bệnh viện Nhi Đồng 2, tận tâm và chuyên nghiệp."
        />
        <meta
          name="keywords"
          content="liên hệ phòng khám nhi, phòng khám kids doctor, đặt lịch khám nhi, bác sĩ nhi đồng 2, khám nhi quận 9, phòng khám trẻ em, tư vấn sức khỏe trẻ em"
        />
        <meta name="author" content="Phòng khám Nhi KidsDoctor" />
        <meta property="og:title" content="Phòng khám Nhi KidsDoctor" />
        <meta
          property="og:description"
          content="Phòng khám chuyên khoa Nhi với đội ngũ bác sĩ từ Bệnh viện Nhi Đồng 2 - tận tâm, chuyên nghiệp và thân thiện với trẻ nhỏ."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.kidsdoctor.vn/" />
              <meta property="og:image" content="/logo192.png" />
              <link rel="canonical" href="https://www.kidsdoctor.vn/" /> */}
      </Helmet>
      <div className="p-4">
        <div className="contact-overlay">
          <div className="contact-wrapper">
            <div className="contact-content">
              <h2>Phòng Khám Chuyên Khoa Nhi Kids Doctor</h2>
              <p>
                Địa chỉ: Phòng khám Nhi Kids Doctor, 136 Đường Số 6 - KDC Phú
                Hữu - Phường Long Trường - Thành phố Hồ Chí Minh
              </p>
              <p>
                Số điện thoại:{" "}
                <a
                  href="tel:0878879188"
                  style={{ color: "#7a7a7a", textDecoration: "none" }}
                >
                  0878 879 188
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:pkkidsdoctor@gmail.com"
                  style={{ color: "#7a7a7a", textDecoration: "none" }}
                >
                  pkkidsdoctor@gmail.com
                </a>
              </p>
              <p>
                Website:{" "}
                <a
                  href="https://www.facebook.com/phongkhamnhikhoaquan9/?locale=vi_VN"
                  style={{ color: "#7a7a7a", textDecoration: "none" }}
                >
                  https://www.facebook.com/phongkhamnhikhoaquan9
                </a>
              </p>
            </div>

            <div className="contact-map">
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
      </div>
    </div>
  );
}
