import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import './ClearCanvas.css';

export default function ClearCanvas({clearCanvas}) {

    return (
        <div>
           <div className="tool-name">Clear Canvas</div>
           <div>
                <FontAwesomeIcon className="broom" icon={faBroom} onClick={clearCanvas} />
            </div>
        </div>
    )
}
