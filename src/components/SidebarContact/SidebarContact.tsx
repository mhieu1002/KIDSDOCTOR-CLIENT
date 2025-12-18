import "./sidebarContact.scss";
import { CalendarOutlined, PhoneOutlined } from "@ant-design/icons";
import zalo from "../../assets/Icon_of_Zalo.svg.webp";
import facebook from "../../assets/2023_Facebook_icon.svg.png";

export default function SidebarContact() {
  return (
    <div className="sidebar-contact">
      <a
        href="https://kidsdoctor.vn/lich-kham-benh"
        rel="noopener noreferrer"
        className="item email"
      >
        <CalendarOutlined />
      </a>
      {/* Facebook */}
      <a
        href="https://m.me/phongkhamnhikhoaquan9"
        target="_blank"
        rel="noopener noreferrer"
        className="item facebook"
      >
        <img src={facebook} alt="zalo" />
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/1164813373070693914"
        target="_blank"
        rel="noopener noreferrer"
        className="item zalo"
      >
        <img src={zalo} alt="zalo" />
      </a>

      {/* Gọi điện */}
      <a href="tel:0878879188" className="item phone">
        <PhoneOutlined />
      </a>
    </div>
  );
}
