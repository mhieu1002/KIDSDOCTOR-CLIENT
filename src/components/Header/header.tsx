import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
  BookOutlined,
  PhoneOutlined,
  ShopOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { key: "/", label: "Trang Chủ", icon: <HomeOutlined /> },
    {
      key: "/lich-kham-benh",
      label: "Lịch Khám Bệnh",
      icon: <MedicineBoxOutlined />,
    },
    { key: "/dich-vu-y-te", label: "Dịch Vụ Y Tế", icon: <TeamOutlined /> },
    {
      key: "/kien-thuc-y-khoa",
      label: "Kiến Thức Y Khoa",
      icon: <BookOutlined />,
    },
    { key: "/nha-thuoc", label: "Nhà Thuốc", icon: <ShopOutlined /> },
    { key: "/lien-he", label: "Liên Hệ", icon: <PhoneOutlined /> },
  ];

  const leftMenu = menuItems.slice(0, 3);
  const rightMenu = menuItems.slice(3);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setMenuOpen(false);
  };

  const renderMenu = (items: typeof menuItems) =>
    items.map((item) => (
      <li
        key={item.key}
        className={location.pathname === item.key ? "active" : ""}
        onClick={() => {
          if (item.key === "/") handleHomeClick();
          else {
            navigate(item.key);
            setMenuOpen(false);
          }
        }}
      >
        <Link to={item.key} className="nav-link">
          {item.icon}
          <span style={{ marginLeft: "10px" }}>{item.label}</span>
        </Link>
      </li>
    ));

  return (
    <header className="main-header">
      <nav className="nav-container">
        {/* Nút menu mobile */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        {/* Menu trái - Desktop */}
        <ul className="nav-menu left">{renderMenu(leftMenu)}</ul>

        {/* Logo */}
        <div className="logo">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault(); // ngăn không điều hướng lại chính nó
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img src={logo} alt="KidsCare Logo" />
          </Link>
        </div>

        {/* Menu phải - Desktop */}
        <ul className="nav-menu right">{renderMenu(rightMenu)}</ul>

        {/* Menu xổ xuống Mobile */}
        <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {renderMenu(menuItems)}
        </ul>
      </nav>
    </header>
  );
}
