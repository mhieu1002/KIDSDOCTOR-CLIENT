import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import { CalendarOutlined, PhoneOutlined, UpOutlined } from "@ant-design/icons";
import "./scroll.scss";

const Scroll = () => {
  const navigate = useNavigate();
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBackToTopButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavigate = () => {
    navigate(`/lich-kham-benh`);
  };

  return (
    <div>
      {backToTopButton && (
        <div className="button-scroll">
          <Tooltip title="Lịch khám bệnh / Tái khám">
            <button className="button-scroll-item" onClick={handleNavigate}>
              <CalendarOutlined />
            </button>
          </Tooltip>

          <Tooltip title="Gọi điện">
            <a
              href="https://zalo.me/0878879188"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-scroll-item">
                <PhoneOutlined />
              </button>
            </a>
          </Tooltip>

          <button className="button-scroll-item" onClick={scrollUp}>
            <UpOutlined />
          </button>
        </div>
      )}
    </div>
  );
};

export default Scroll;
