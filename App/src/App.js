import React, {useState} from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import './styles/App.scss'
import data from './utils'
function App() {
  const [songs,setSong]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[12]);
  const[isPlaying,setIsPlaying]=useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}/>
    </div>
  );
}

export default App;
