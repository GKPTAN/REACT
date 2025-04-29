import { useContext, useEffect } from "react";
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

  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const titles = document.querySelectorAll(".counter-text");

    counters.forEach((counter, index) => {
      const number = counter.querySelector(".counter-number");
      const title = titles[index];

      if (number && title) {
        const numberWidth = number.offsetWidth;
        title.style.width = `${numberWidth}px`;
        title.style.textAlign = "center";
      };
    });
  }, [day, hour, minute, second]);

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
          <Counter number={day} eventColor={eventColor} textColor={textColor} title="Dias" />
          <Counter number={hour} eventColor={eventColor} textColor={textColor} title="Horas" />
          <Counter number={minute} eventColor={eventColor} textColor={textColor} title="Minutos" />
          <Counter number={second} eventColor={eventColor} textColor={textColor} title="Segundos" />
      </div>
    </>
  );
};

export default Countdown;
