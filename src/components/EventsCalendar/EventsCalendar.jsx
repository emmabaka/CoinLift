import { useEffect, useState } from "react";
import axios from "axios";
import css from "./EventsCalendar.module.css";

const EventsCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-coin-lift-production.up.railway.app/api/v1/cryptocurrency/events"
      )
      .then((res) => setEvents(res.data));
  }, []);

  return (
    <div className={`${css.calendarContainer} box`}>
      <h2 className={css.title}>Calendar</h2>
      {events.length === 0 ? (
        <p className={css.defaultText}>There are no events in the near future </p>
      ) : (
        <table className={css.table}>
          <thead>
            <th></th>
            <th>Date</th>
            <th className={css.head}>Conference</th>
          </thead>
          <tbody>
            <tr>
              <td className={css.tableCoin}>
                <img src="./logo.png" width="38" alt="" />
                Sola-X
              </td>
              <td className={css.tableDate}>02.05.2023</td>
              <td className={css.tableIcon}>x</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EventsCalendar;
