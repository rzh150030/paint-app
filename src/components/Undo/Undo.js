import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';


export default function Undo({getColor}) {
    const images = useSelector(state => state.images);

    return (
        <div>
           <div>Undo</div>
           <FontAwesomeIcon icon={faUndo} />
        </div>
    )
}
