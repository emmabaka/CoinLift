import { useEffect, useState } from "react";
import axios from "axios";
import yes from "../../assets/done.svg";
import no from "../../assets/close.svg";
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
            <tr>
              <th className={css.line}></th>
              <th className={css.line}>Date</th>
              <th className={css.head}>Conference</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item, i) => (
              <tr key={i}>
                <td className={css.tableCoin}>
                  <div className={css.tableCoinWrap}>
                    <img
                      src={item.imageLink}
                  
                      alt={item.cryptoName}
                    />
                    {item.cryptoName}
                  </div>
                </td>
                <td className={css.tableDate}>{item.date}</td>
                <td className={css.tableIcon}>
                  {item.is_conference ? (
                    <img src={yes} alt="yes" width="25" height="25" />
                  ) : (
                    <img src={no} alt="no" width="25" height="25" />
                  )}
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
