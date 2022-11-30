import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { playAudio } from "../util";
import { faPlay,faAngleLeft,faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
const Player =({currentSong,setIsPlaying,isPlaying, audioRef,setSongInfo,songInfo,songs, setCurrentSong,setSongs})=>{
    // use effect
    useEffect(()=>{
        const newSongs=songs.map((song)=>{
            if(song.id===currentSong.id){
                return{
                    ...song,
                    active:true,
                }
            }
            else{
                return{
                    ...song,
                    active:false,
                }
            }
        });
        setSongs(newSongs);
    
    },[currentSong]);
    
    // event handler
    const [Icon,setIcon]=useState(faPlay)
    
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
            const skipTrackHandler=(direction)=>{
                let currentIndex=songs.findIndex((song)=>song.id===currentSong.id);
                if(direction==='skip-forward'){
                    setCurrentSong(songs[(currentIndex+1)%songs.length])
                }   
                if(direction==='skip-back'){
                    if((currentIndex-1)%songs.length===-1){
                        setCurrentSong(songs[songs.length-1])
                        playAudio(isPlaying,audioRef);
                        return;
                    }
                    setCurrentSong(songs[(currentIndex-1)%songs.length])
                }
                playAudio(isPlaying,audioRef);
            }
//Add the styles
            const trackAnim={
                transform:`translateX(${songInfo.animationPercentage}%)`
            }




        return(
        <div className='player'>
        <div className='time-control'>
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={{background:`linear-gradient(to right,${currentSong.color[0]},${currentSong.color[1]})`}} className='track'>
        <input 
        onChange={dragHandler}
        min={0}
        value={songInfo.currentTime}
         max={songInfo.duration || 0}
         type="range"/>
         <div style={trackAnim} className="animate-track"></div>
         </div>
        <p>{getTime(songInfo.duration || 0)}</p>
        </div>
        <div className='play-control'>
        <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-back')} className='skip-back' size='2x' icon={faAngleLeft}/>
        <FontAwesomeIcon onClick={playSongHandler}    className='play' size='2x' icon={Icon}/>
        <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-forward') }className='skip-forward' size='2x' icon={faAngleRight}/>
        </div>
        </div>
        
    )
}

export default Player;