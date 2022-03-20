import React, {useState} from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import './styles/App.scss'
import data from './utils'
function App() {
  const [songs,setSong]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[1]);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player/>
    </div>
  );
}

export default App;
