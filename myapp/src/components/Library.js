import React from "react";
import LibrarySong from "./LibrarySong";
export const Library=({songs,setCurrentSong,audioRef,isPlaying,setSongs,libraryStatus})=>{
    return(
        <div className={`library ${(libraryStatus) ? 'active-Library':''}`}>
            <h2>Library</h2>
            <div className="library-songs">
              {songs.map((song)=>(
                <LibrarySong songs={songs} song={song} setCurrentSong={setCurrentSong} id={song.id} key={song.id} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs}/>
              ))}
            </div>
        </div>
    )
}
