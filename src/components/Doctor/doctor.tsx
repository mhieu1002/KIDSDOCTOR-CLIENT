import "./doctor.scss";
import { useNavigate } from "react-router-dom";
import { useDoctor } from "../../hooks/useDoctor";
import type { TUseDoctorDto } from "../../hooks/useDoctor";
import { BASE_URL } from "../../constants";

export default function DoctorTeam() {
  const navigate = useNavigate();

  const { doctors, isLoading } = useDoctor({
    page: 1,
    pageSize: 1000,
    keyword: "",
  } as TUseDoctorDto);

  const doctorList =
    doctors?.data?.allDoctor?.filter((doctor: any) => doctor.status === true) ??
    [];

  const handleViewDetail = (doctor: any) => {
    const slug = doctor.name
      ?.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    navigate(`/bac-si/${doctor.id}-${slug}`);
  };

    const renderTextBlock = (text: string) =>
    text
      ?.split("\n")
      .filter((line) => line.trim() !== "")
      .map((line, index) => (
        <p key={index} className="bullet-line">
          {line}
        </p>
      ));

  if (isLoading) {
    return (
      <section className="doctor-team">
        <div className="container">
          <div className="heading">
            <h2>Đội Ngũ Chuyên Gia</h2>
            <p>Bé được chăm sóc bởi những bác sĩ hàng đầu</p>
            <div className="line"></div>
          </div>
          <div className="doctor-list">
            <div>Đang tải danh sách bác sĩ...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="doctor-team">
      <div className="container">
        <div className="heading">
          <h2>Đội Ngũ Chuyên Gia</h2>
          <p>Bé được chăm sóc bởi những bác sĩ hàng đầu</p>
          <div className="line"></div>
        </div>

        <div className="doctor-list">
          {doctorList.map((doctor: any) => (
            <div className="doctor-card" key={doctor.id}>
              <div className="doctor-img">
                <img
                  src={`${BASE_URL.BASE_URL_IMAGE}${doctor.image}`}
                  alt={doctor.name}
                />
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.displayPosition}</p>
                <p className="skills">{renderTextBlock(doctor.displaySpecialty)}</p>
                <button
                  className="view-more"
                  onClick={() => handleViewDetail(doctor)}
                >
                  XEM THÊM
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
