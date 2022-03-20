import React ,{useState} from "react";
import axios from "axios";

function App() {

  const[data, setData]=useState({})
  const[location, setLocation]=useState('')

//`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=4e7d9ed9b38d47fbe8ba672a30b8a3c8`
const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=4e7d9ed9b38d47fbe8ba672a30b8a3c8`

  const searchLocation = (e) => {
   if (e.key ==='Enter'){
     axios.get(url).then((response) =>{
       setData(response.data)
       console.log(response.data)
      })
      setLocation ('')
    } 
  }



  return (
    <div className="app">
      <div className="search">
        <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text" />
      </div>

      <div className="container">

          <div className="top">

              <div className="location">
                  <p>{data.name}</p>
              </div>

              <div className="temp">
               {data.main ? <h1>{data.main.temp.toFixed()}&deg;c</h1> : null}
              </div>

              <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
              </div>

          </div>

    {data.name != undefined &&
          <div className="bottom">

              <div className="feels">
                <p>Feel Like</p>
                {data.main ? <p className="bold">{data.main.feels_like.toFixed()}&deg;c</p> : null}
                
              </div>

              <div className="humidity">
                <p>Humidity</p>
                {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              </div>

              <div className="wind">
                <p>Winds Speed</p>
                {data.wind? <p className="bold">{data.wind.speed.toFixed()}KM/H</p> : null}
              </div>

          </div>
    }

      </div>
    </div>
  );
}

export default App;
