import { Outlet, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { CountdownContext } from './context/CountdownContext';
import { getBrightness } from './routes/Countdown';
import NewYear from './assets/ano_novo.jpg';
import './App.css';

function App() {

  const location = useLocation();

  const {event} = useContext(CountdownContext);
  let eventImage = null;
  let eventColor = event ? event.color : '#ffffff';
  if(event) {
    eventImage = event.image;
  };

  const isCountdownRoute = location.pathname === '/countdown';

  const brightness = getBrightness(eventColor);
  const containerBgColor = isCountdownRoute ? (brightness > 128 ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'rgba(255, 255, 255, 0.8)';

  return (
    <>
      <div className="App" style={eventImage ? { backgroundImage: `url(${eventImage})`} : { backgroundImage: `url(${NewYear})`}}>
        <div className="container" style={{backgroundColor: containerBgColor}}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App
