import hotBg from "./assets/hot.jpeg"
import Descriptions from "./components/Descriptions";
import {useEffect} from "react"
import { getFormatedWeatherData } from "./weatherServices";


function App() {

  useEffect(() => {
    const fetchWeatherData = async () => {
    const data = await getFormatedWeatherData('paris')
    };
    fetchWeatherData();
  }, [])

  return (
    <div className="app" style={{backgroundImage : `url(${hotBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section_inputs">
            <input type="text" name="city" placeholder="Enter City..."/>
            <button>°F</button>

          </div>
          <div className="section section_temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="https://tse2.mm.bing.net/th?id=OIP.YkWd9wLPSbc8CnJZPJG-igHaFj&pid=Api&P=0" alt="cloud"/>
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 °C</h1>
            </div>
          </div>

          <Descriptions/> 
        </div>
      </div>
    </div>
  );
}

export default App;
