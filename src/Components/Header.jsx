import './Header.css';
import arrow from '../assets/dark-arrow.png'
import program1 from '../assets/program-1.png'
import program2 from '../assets/program-2.png'
import program3 from '../assets/program-3.png'
import program_icon from '../assets/program-icon-1.png'
import program_icon_1 from '../assets/program-icon-2.png'
import program_icon_2 from '../assets/program-icon-3.png'
import Title from './Title';
export default function Header() {
    return (
        <>
            <div className='Header nav-container'>
                <div className='text'>
                    <h1>We Ensure better education for a better world</h1>
                    <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and education needed to excel in dynamic field of education</p>
                    <button className='btn'>Explore more <img className='arrow' src={arrow} alt="" /></button>
                </div>
            </div>
            <Title />
            <div className="program">
                <div className='programs'>
                    <img src={program1} alt="" />
                    <div className='captions'>
                        <img src={program_icon} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className='programs'>
                    <img src={program2} alt="" />
                    <div className='captions'>
                        <img src={program_icon_1} alt="" />
                        <p>Masters Degree</p>
                    </div>
                </div>
                <div className='programs'>
                    <img src={program3} alt="" />
                    <div className='captions'>
                        <img src={program_icon_2} alt="" />
                        <p>Post Graduation</p>
                    </div>
                </div>
            </div>
        </>
    )
}
