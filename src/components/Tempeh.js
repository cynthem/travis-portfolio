import { Parallax } from 'react-parallax';
import arts from '../assets/images/art/2012_Anim_Summer_1280.png';

const Temp = () => (
    <Parallax className="image" bgImage={arts} strength={800}>
        <div className='content'>
            <span className='img-txt'>a trip to cutie town</span>
        </div>
    </Parallax>
);

export default Temp;