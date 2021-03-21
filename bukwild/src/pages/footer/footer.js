import './styles/footer.scss';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Footer = ( { footer } ) => {
    return (
    <div className = "footerContainer">
        <div className = "footerHolder">
            <div className = "footerContent">
                <div className = "footerCta">{ footer }</div>
                <div className = "footerNavigator">Lets Talk <span><AiOutlineArrowRight/></span></div>
            </div>
        </div>
    </div>
    )
};

export default Footer;