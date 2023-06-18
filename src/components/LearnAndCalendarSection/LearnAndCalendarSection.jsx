import EventsCalendar from "../EventsCalendar/EventsCalendar";
import LearnPreview from "../LearnPreview/LearnPreview";
import css from "./LearnAndCalendarSection.module.css";

const LearnAndCalendarSection = () => {
  return (
    <section>
      <div className={`${css.wrapper} container`}>
        <LearnPreview />
        <EventsCalendar />
      </div>
    </section>
  );
};

export default LearnAndCalendarSection;
