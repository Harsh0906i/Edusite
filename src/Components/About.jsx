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
                <br />
                <p>
                    Welcome to Edusity, a leading institution dedicated to fostering academic excellence, innovation, and personal growth. Our university is committed to providing a dynamic learning environment where students from diverse backgrounds can thrive and achieve their full potential.
                    <br />
                    <br />
                    Founded in 1980, Maschchussets, USA, Edusity has a rich history of academic tradition combined with a forward-thinking approach to education. We offer a wide range of undergraduate, graduate, and professional programs across various disciplines, ensuring that students have access to cutting-edge knowledge and hands-on experiences that prepare them for success in their chosen careers.
                    <br />
                    <br />
                    Our faculty members are experts in their fields, passionate about teaching, and dedicated to guiding students through their academic journey. They engage students in stimulating discussions, research projects, and experiential learning opportunities that inspire intellectual curiosity and critical thinking.
                </p>
                <br />
            </div>
            <VideoPlayer play={play} setplay={setplay} />
        </div>
    )
}
