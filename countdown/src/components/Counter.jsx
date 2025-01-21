import './Counter.css';

const Counter = ({title, number, eventColor, textColor}) => {
  return (
    <div className="counter">
        <p className="counter-number" style={{backgroundColor: eventColor, color: textColor}}>{number}</p>
        <h3 className="counter-text" style={{color: eventColor}}>{title}</h3>
    </div>
  );
};

export default Counter