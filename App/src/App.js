import React, {useState} from 'react';
import Player from "./components/Player";
import Song from "./components/Song";
import './styles/App.scss'
import data from './utils'
function App() {
  const [songs,setSong]=useState(data());
  const [currentSong,setCurrentSong]=useState(songs[1]);
  const[isPlaying,setIsPlaying]=useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player 
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}/>
      {/* <footer>
       <p class="mt-5 text-slate-400">
                Made with 💖 by
                <a href="https://www.linkedin.com/in/priyanshu-singh-a051591b3/" class="text-slate-500 dark:text-white" target="_blank" rel="noopener"
                    > Priyanshu Singh</a>.
            </p>
            <p class="mb-5 mt-1 text-slate-400 text-xs">
                Copyright &copy; Priyanshu Developer. Licensed under
                <a class="text-slate-500 dark:text-white" href="https://github.com/priyanshusingh305/react-player/blob/main/LICENSE"
                    > GPL-v2</a>.
            </p>
        </footer>             */}
    </div>
  );
}

export default App;
