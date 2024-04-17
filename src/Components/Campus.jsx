import './Campus.css'
import './Title.css'
import gallery1 from '../assets/gallery-1.png'
import gallery2 from '../assets/gallery-2.png'
import gallery3 from '../assets/gallery-3.png'
import gallery4 from '../assets/gallery-4.png'
import White from '../assets/white-arrow.png'
export default function Campus() {
    return (
        <div className='campus'>
            <div className='title'>
                <p>Gallery</p>
                <h2>Campus Photo</h2>
            </div>
            <div className='gallery'>
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
            </div>
            <button className='btn dark'>See More <img src={White} alt="" /></button>

        </div>
    )
}
