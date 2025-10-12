import "./doctor.scss";
import bsThao from "../../assets/hinh-bs-thao.jpg";
import bsTuyen from "../../assets/hinh-bs-tuyen.jpg";
import bsBinh from "../../assets/hinh-bs-binh.jpg";

export default function DoctorTeam() {
  const doctors = [
    {
      id: 1,
      name: "BS. NGUYỄN THỊ THẢO",
      specialty: "Bác sĩ Bệnh viện Nhi Đồng 2",
      skills: "Chuyên khoa Tiêu hóa - Gan mật.",
      img: bsThao,
    },
    {
      id: 2,
      name: "ThS. BSCK1. HOÀNG MINH TUYỀN",
      specialty: "Bác sĩ Bệnh viện Nhi Đồng 2",
      skills: "Chuyên khoa Hô hấp - Miễn dịch.",
      img: bsTuyen,
    },
    {
      id: 3,
      name: "ThS. BSCK1. THANH BÌNH",
      specialty: "Bác sĩ chuyên khoa",
      skills: "Chuyên khoa Nhi tổng quát.",
      img: bsBinh,
    },
  ];

  return (
    <section className="doctor-team">
      <div className="container">
        <div className="heading">
          <h2>Đội Ngũ Chuyên Gia</h2>
          <p>Bé được chăm sóc bởi những bác sĩ hàng đầu</p>
          <div className="line"></div>
        </div>

        <div className="doctor-list">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <div className="doctor-img">
                <img src={doctor.img} alt={doctor.name} />
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <p className="skills">{doctor.skills}</p>
                <button className="view-more">XEM THÊM</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
