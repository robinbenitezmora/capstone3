import ReactPlayer from 'react-player/youtube';
import Navbar from './components/navbar';
import Panel from './components/panel';

const App = () => (
  <div className="App">
    <Navbar />
    <Panel />
    <ReactPlayer
      url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      autoPlay
      controls
      style={{ margin: 'auto', height: '1.5rem', width: '50%' }}
    />
  </div>
);

export default App;
