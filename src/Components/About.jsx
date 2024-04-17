import './About.css'
import About_img from '../assets/about.png'
import Play_icon from '../assets/play-icon.png'
import VideoPlayer from '../videoPlayer/VideoPlayer'
import { useState } from 'react'

export default function About() {
    const [play, setplay] = useState(false);
    return (
        <div className='about'>
            <div className="left">
                <img src={About_img} className='About_img' alt="" />
                <img src={Play_icon} className='Play_icon' onClick={() => { setplay(true) }} alt="" />
            </div>
            <div className="right">
                <h3>About University</h3>
                <h2>Nuturing Tommorow's Leaders Today</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium labore numquam dolores libero non tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum labore provident delectus. Inventore necessitatibus a, quia natus, totam, eveniet sequi aperiam aliquid accusamus amet consequuntur. Dignissimos, asperiores aperiam. Odio, iure! odio illum nisi. Et, in incidunt consectetur culpa earum reiciendis dicta ex soluta iusto quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vitae repellat ratione commodi iste aliquid laboriosam doloribus nulla delectus ducimus sunt officia officiis, earum tempora iusto dolor explicabo quos eveniet sequi, culpa incidunt. Natus nulla officia illum reprehenderit quas, a praesentium eveniet dicta doloremque exercitationem. Assumenda perspiciatis molestiae minus illum? </p>
            </div>
            <VideoPlayer play={play} setplay={setplay} />
        </div>
    )
}
