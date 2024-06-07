import logo from './logo.svg';
import axios from 'axios';
import ReactAnimatedWeather from 'react-animated-weather';
import './App.css';

function App() {
  let apiKey = "3f6be1c407b0d9d1933561808db358ba";
  let city = "Paris";
  let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



  function showTemperature(response){
    alert (response.data.main.temp);


  }
  axios.get(url).then(showTemperature);


  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello Vee</h1>
        <p> I love You </p>
        <h2></h2>From the love of your life
        <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="goldenrod"
    size={512}
    animate= {true}
  />
     
      </header>
    </div>
  );
}

export default App;
