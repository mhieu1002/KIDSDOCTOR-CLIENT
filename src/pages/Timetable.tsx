import Carousel from "../components/Carousel/carousel";
import "../styles/timetable.scss";

export default function Timetable() {
  return (
    <div>
      <div className="p-4">
        <Carousel />
        <div className="calendar-container">
          {" "}
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Asia%2FHo_Chi_Minh&hl=vi&showPrint=0&showCalendars=0&mode=MONTH&src=NDQxZDMyMGQyOTU5NGY4MWU1MTNmNGFjNTM3ZGJhNzY3ODVlYTNmNGU3ZjUzZTBjMDA3MTJiM2MzZTM0NjhiYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
