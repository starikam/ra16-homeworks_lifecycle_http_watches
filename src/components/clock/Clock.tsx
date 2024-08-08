import { FC, useState, useEffect } from "react";
import { ClockProps } from "./type/ClockProps";
import { ClockComponentProps } from "./type/ClockComponentProps";
import "./css/clock.css";

/**
 * Clock component that displays the time for a specific city.
 * @param {ClockComponentProps} param0 - Destructured object with city, timeZone, and onDelete
 * @return {ReactElement} The clock component UI
 */
const Clock: FC<ClockComponentProps> = ({ city, timeZone, onDelete }) => {
  const [time, setTime] = useState<ClockProps>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const hours = date.getHours() + timeZone;
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setTime({ hours, minutes, seconds });
    }, 1000);


    return () => {
      clearInterval(intervalId);
    };
  }, [timeZone]);

  const handleDelete = () => {
    onDelete();
  };

  return (
    <aside className="clock-wrapper">
      <h3 className="title-city">{city}</h3>
      <div className="clock-container">
        <div className="close-btn" onClick={handleDelete}></div>
        <div className="clock">
          <div
            className="hour-hand"
            style={{
              transform: `translate(-50%, -50%) rotate(${
                (time?.hours % 12) * 30 + time?.minutes * 0.5
              }deg)`,
            }}
          ></div>
          <div
            className="minute-hand"
            style={{
              transform: `translate(-50%, -50%) rotate(${
                time?.minutes * 6 + time?.seconds * 0.1
              }deg)`,
            }}
          ></div>
          <div
            className="second-hand"
            style={{
              transform: `translate(-50%, -50%) rotate(${
                time?.seconds * 6
              }deg)`,
              backgroundColor: "red",
            }}
          ></div>
          <div className="center-circle"></div>
        </div>
      </div>
    </aside>
  );
};

export default Clock;