import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux';
import { undoAction } from "../../store/reducer";

export default function Undo({clearCanvas}) {
    const dispatch = useDispatch();
    const images = useSelector(state => state.images);
    const canvas = useSelector(state => state.canvas);

    const handleUndo = () => {
        if (images.length) {

            const ctx = canvas.getContext("2d");
            clearCanvas();
            dispatch(undoAction());
            debugger
            ctx.beginPath();
            ctx.moveTo(images[0].x, images[0].y);

            for (let i = 1; i < images.length; i++) {
                const coord = images[i];
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
        }
    }

    return (
        <div>
           <div>Undo</div>
           <FontAwesomeIcon icon={faUndo} onClick={handleUndo}/>
        </div>
    )
}


/* const ctx = canvas.getContext("2d");
            const eraseCoords = images[images.length - 1];
            const currColor = color;
            ctx.strokeStyle = "#000000";
            ctx.beginPath();
            ctx.moveTo(eraseCoords[0].x, eraseCoords[0].y);
            dispatch(undoAction());

            for (let i = 1; i < eraseCoords.length; i++) { //draw and erase the line drawn
                //need to account for brush size later
                const coord = eraseCoords[i];
                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.lineTo(coord.x, coord.y);
                ctx.stroke();
            }
            ctx.strokeStyle = currColor; */
