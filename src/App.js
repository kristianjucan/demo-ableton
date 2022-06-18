import Header from './Components/Header';
import FirstText from './Components/FirstText';
import FirstCollage from './Components/FirstCollage';
import VideoSection from './Components/VideoSection';
import ThirdText from './Components/ThirdText';
import SecondCollage from './Components/SecondCollage';
import ThirdCollage from './Components/ThirdCollage';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstText />
      <FirstCollage />
      <VideoSection />
      <ThirdText />
      <SecondCollage />
      <ThirdCollage />
     
    </div>
  );
}

export default App;
