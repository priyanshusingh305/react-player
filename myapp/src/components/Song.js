import React from 'react';
const Song =({currentSong})=>{
    return(
        <div className='song-container'>
        <img  style={{boxShadow:`5px 5px 5px 1px ${currentSong.color[1]}`, transition: 'all 0.3s ease'}}  alt={currentSong.name} src={currentSong.cover}></img>
        <h2>{currentSong.name}</h2>
        <h3>{currentSong.artist}</h3>
        </div>
        
    )
}

export default Song;