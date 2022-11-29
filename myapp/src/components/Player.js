import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faAngleLeft,faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
const Player =({currentSong,setIsPlaying,isPlaying, audioRef,setSongInfo,songInfo})=>{
    const [Icon,setIcon]=useState(faPlay)
     // event handler
    const playSongHandler=()=>{
        // console.log(audioRef.current)
        if(isPlaying){
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
            setIcon(faPlay)
        }
        else{
            audioRef.current.play()
            setIsPlaying(!isPlaying)
            setIcon(faPause)       
        }
    }
    const dragHandler=(e)=>{
        // console.log(e.target.value)
        audioRef.current.currentTime=e.target.value;
        setSongInfo({...songInfo,currentTime:e.target.value} )
    }
// state
// const [songInfo, setsongInfo] = useState({
//     currentTime:null,
//     duration:null,
// });

const getTime=(time)=>{
    return(
       Math.floor( time /60)+":"+("0"+Math.floor(time%60)).slice(-2)  
    );
};

    return(
        <div className='player'>
        <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
        onChange={dragHandler}
        min={0}
        value={songInfo.currentTime}
         max={songInfo.duration}
         type="range"/>
        <p>{getTime(songInfo.duration)}</p>
        </div>
        <div className='play-control'>
        <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler}    className='play' size='2x' icon={Icon}/>
        <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}/>
        </div>
        </div>
        
    )
}

export default Player;