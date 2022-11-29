import React, {useState, useRef} from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import { Library } from './components/Library';
import Nav from './components/Nav';
import './styles/App.scss'
import data from './utils'
function App() {
  const timeUpdateHandler=(e)=>{
    const current=e.target.currentTime;
    const duration=e.target.duration;
    // console.log(current);
    // console.log(duration);
    setSongInfo({...songInfo,currentTime:current,duration:duration})
    }
  //Ref
  const audioRef =useRef(null);
  //state
  const [songs,setSongs]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[5]);
  const[isPlaying,setIsPlaying]=useState(false)
  const[songInfo,setSongInfo]=useState({
    currentTime:0,
    duration:0,
    });
  const [libraryStatus,setLibraryStatus]=useState(false);  
  return (
    <div className="App">
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}

      />
      <Library audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus}/>
      <audio 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
         ref={audioRef} src={currentSong.audio} ></audio>
    </div>
  );
}

export default App;

