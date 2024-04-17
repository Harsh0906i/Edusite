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
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure asperiores exercitationem eligendi aspernatur officia alias unde iusto! Labore, et expedita, in quis magni fdistinctio quidem est voluptatem incidunt!.
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
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure asperiores exercitationem eligendi aspernatur officia alias unde iusto! Labore, et expedita, in qui
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user">
                                    <img src={user3} alt="" />
                                    <div>
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure asperiores exercitationem eligendi aspernatur officia alias unde iusto! Labore, et expedita, in quis magni fugit quisquam sunt alias, dicta quidem blanditiis Lorem ipsum dolor sit
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="slide">
                                <div className="user">
                                    <img src={user4} alt="" />
                                    <div>
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure asperiores exercitationem eligendi aspernatur officia alias unde iusto! Labore, et expedita, in quis magni fugit quisquam sunt alias, dicta quidem blanditiis Lorem ipsum dolor sit amet
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
