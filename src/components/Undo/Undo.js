import { useState } from "react";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';


export default function Undo() {
    const images = useSelector(state => state.images);

    const [prevState, setPrevState] = useState(images);


    return (
        <div>
           <div>Undo</div>
           <FontAwesomeIcon icon={faUndo} />
        </div>
    )
}
