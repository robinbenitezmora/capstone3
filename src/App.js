import ReactPlayer from 'react-player/youtube';
import Navbar from './components/navbar';
import WeatherPanel from './components/panel';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <WeatherPanel />
      <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      autoPlay
      controls
      style={{ margin: 'auto', height: '1.5rem', width: '50%'}}
      />
    </div>
  );
}

export default App;
