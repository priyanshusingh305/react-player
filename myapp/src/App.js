import React, {useState, useRef} from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import { Library } from './components/Library';
import Nav from './components/Nav';
import './styles/App.scss'
import data from './data'
function App() {
  const timeUpdateHandler=(e)=>{
    const current=e.target.currentTime;
    const duration=e.target.duration;
    // Calculate Percentage
    const roundedCurrent=Math.round(current);
    const roundedDuration=Math.round(duration);
    const animationPercentage=Math.round((roundedCurrent/roundedDuration)*100);
    // console.log(animationPercentage);
    // console.log(current);
    // console.log(duration);
    setSongInfo({...songInfo,currentTime:current,duration:duration,animationPercentage:animationPercentage})
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
    animationPercentage:0,
    });
  const [libraryStatus,setLibraryStatus]=useState(false);  

  const songEndHandler=async()=>{
    let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
      await  setCurrentSong(songs[(currentIndex+1)%songs.length]) 
      if (isPlaying) audioRef.current.play();
  }
  return (
    <div className={`App ${libraryStatus? "library-active":"" }`}>
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
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
         ref={audioRef} src={currentSong.audio} onEnded={songEndHandler} ></audio>
    </div>
  );
}

export default App;

