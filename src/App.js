import logo from './logo.svg';
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';
import { useState } from 'react';

function App() {


  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  const switchLight = () => setLight((light === "on") ? "off" : "on");


  const LightSwitchButton = (props) => {
    const handleClick = () => setLight(light === "on" ? "off" : "on");
    return (
      <button className="LightSwitchButton" onClick={handleClick}>
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
    )
  }

  

  return (
 <div className={`App ${dark}`}>    
            <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton />
        <CounterButton />
        <LightSwitchButton onCLick={switchLight}  light={light}/>
        <TextRepeaterButton />
      </section>

    </div>
  );
}

export default App;


