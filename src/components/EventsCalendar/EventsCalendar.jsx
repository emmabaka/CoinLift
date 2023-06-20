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
        <p className={css.defaultText}>
          There are no events in the near future{" "}
        </p>
      ) : (
        <table className={css.table}>
          <thead>
            <th></th>
            <th>Date</th>
            <th className={css.head}>Conference</th>
          </thead>
          <tbody>
            {events.map((item, i) => (
              <tr key={i}>
                <td className={css.tableCoin}>{item.cryptoName}</td>
                <td className={css.tableDate}>{item.date}</td>
                <td className={css.tableIcon}>
                  {item.is_conference ? "yes" : "no"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EventsCalendar;
