import {
    MainWrapper
} from './styles';

import backgrounImage from '../../assets/images/train-close.jpg';
import Navbar from '../Navbar';

const Landing = () => {
    return(
        <>
            <MainWrapper imageUrl={backgrounImage}>
                <Navbar></Navbar>
            </MainWrapper>
        </>
    )
}

export default Landing;