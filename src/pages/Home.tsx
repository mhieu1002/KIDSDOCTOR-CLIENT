import Carousel from "../components/Carousel/carousel";
import AboutSection from "../components/About/aboutSection";
import DoctorTeam from "../components/Doctor/doctor";
import Service from "../components/Service/service";

export default function Home() {
  return (
    <div>
      <div className="p-4">
        <Carousel />
      </div>
      <AboutSection />
      <DoctorTeam />
      <Service />
    </div>
  );
}
