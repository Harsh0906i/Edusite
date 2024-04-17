import './Video.css'
import video from '../assets/video.mp4'
import { useRef } from 'react'
export default function VideoPlayer({ play, setplay }) {
    const player = useRef(null)
    function click(e) {
        if (e.target === player.current) {
            setplay(false);
        }
    }
    return (
        <div className={`videoplayer ${play ? '' : 'hide'}`} ref={player} onClick={click} >
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}
