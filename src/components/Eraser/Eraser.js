import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import './Eraser.css';

export default function Eraser({getColor}) {
    
    // Changes color to black to be able to erase
    const changeColor = () => {
        getColor('#000');
    }

    return (
        <div onClick={changeColor}>
            <div className="tool-name">Eraser</div>
            <FontAwesomeIcon className="eraser" icon={faEraser} />
        </div>
    )
}
