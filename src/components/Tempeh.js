import { Parallax } from 'react-parallax';
import arts from '../assets/images/art/2012_Anim_Summer_1280.png';

const Temp = () => (
    <Parallax className="image" bgImage={arts} strength={400}>
        <div className='content'></div>
    </Parallax>
);

export default Temp;