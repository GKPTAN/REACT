import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContext";
import { Navigate } from "react-router-dom";
import useCountdown from "../hooks/useCountdown";
import Title from "../components/Title";
import Counter from "../components/Counter";

export const getBrightness = (hexcolor) => {
    const red = parseInt(hexcolor.slice(1, 3), 16);
    const green = parseInt(hexcolor.slice(3, 5), 16);
    const blue = parseInt(hexcolor.slice(5, 7), 16);

    return (red * 299 + green * 587 + blue * 114) / 1000;
};

const getTextColor = (bgColor) => {
    const brightness = getBrightness(bgColor);
    return brightness < 128 ? "#ffffff" : "#000000";
};

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) {
    return <Navigate to="/" replace />;
  }

  let eventTitle = null;

  if (event.title) {
    eventTitle = event.title;
  };

  let eventColor = null;

  if (event.color) {
    eventColor = event.color;
  };

  const [day, hour, minute, second] = useCountdown(event.date);

  const textColor = getTextColor(eventColor);

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} textColor={textColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} textColor={textColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} textColor={textColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} textColor={textColor} />
      </div>
    </>
  );
};

export default Countdown;
