import './Testimonial.css';
import './Title.css';
import frontslidebtn from '../assets/next-icon.png'
import backslidebtn from '../assets/back-icon.png'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'
import { useRef } from 'react';
export default function Testimonial() {
    const slider = useRef();
    let tx = 0;

    function frontslide() {
        if (tx > -50) {
            tx = tx - 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    function backslide() {
        if (tx < 0) {
            tx = tx + 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


    return (
        <>
            <div className='title'>
                <p>TESTIMONIALS</p>
                <h2>What Students say</h2>
            </div>
            <div className='testimonial'>
                <img src={frontslidebtn} alt="" onClick={frontslide} className='next-btn' />
                <img src={backslidebtn} alt="" onClick={backslide} className='back-btn' />
                <div className="slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user">
                                    <img src={user1} alt="" />
                                    <div>
                                        <h3>Natasha Nice</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>
                                I've worked hard this semester to improve my time management skills, and it's paid off in my grades. I've also become more confident in participating during class discussions. All thanks to my class Teacher.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user">
                                    <img src={user2} alt="" />
                                    <div>
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>
                                Reflecting on my progress, I've noticed a significant improvement in my ability to write concise and well-structured essays. I've also enjoyed leading group discussions and collaborating with classmates. Thanks for the supportive enviornment
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user">
                                    <img src={user3} alt="" />
                                    <div>
                                        <h3>Rose Williamson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>
                                This semester, I've focused on improving my research skills, and I've seen positive results in the quality of my assignments. I've also enjoyed taking on leadership roles in group projects. All Thanks to my teacher to guide me through this process.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user">
                                    <img src={user4} alt="" />
                                    <div>
                                        <h3>Ben Adams</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>
                                I've been working on my public speaking skills, and I'm pleased with how much more comfortable I've become in presenting my ideas in front of the class. I've also appreciated the diverse perspectives shared by my peers.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
