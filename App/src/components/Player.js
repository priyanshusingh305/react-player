import React,{useRef,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faAngleLeft,faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
const Player =({currentSong,setIsPlaying,isPlaying})=>{
    //Ref
    const [Icon,setIcon]=useState(faPlay)
    const audioRef =useRef(null);
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
// state
// const [songInfo, setsongInfo] = useState({
//     currentTime:null,
//     duration:null,
// });
    return(
        <div className='player'>
        <div className='time-control'>
        <p>Start Time</p>
        <input type="range"/>
        <p>End time</p>
        </div>
        <div className='play-control'>
        <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler}    className='play' size='2x' icon={Icon}/>
        <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}/>
        </div>
        <audio ref={audioRef} src={currentSong.audio} ></audio>
        </div>
        
    )
}

export default Player;