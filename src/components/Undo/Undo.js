import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux';
import { undoAction } from "../../store/reducer";

export default function Undo({color}) {
    const dispatch = useDispatch();
    const images = useSelector(state => state.images);
    const canvas = useSelector(state => state.canvas);

    const handleUndo = () => {
        dispatch(undoAction());
        if (images.length) {

            const ctx = canvas.getContext("2d");
            cleanCanvas(ctx);
            debugger
            ctx.beginPath();
            ctx.moveTo(images[0].x, images[0].y);

            for (let i = 0; i < images.length; i++) {
                const coords = images[i];
                for (let j = 0; j < coords.length; j++) {
                    const coord = coords[j];
                    ctx.lineJoin = "round";
                    ctx.lineCap = "round";
                    ctx.lineTo(coord.x, coord.y);
                    ctx.stroke();
                }
            }
            debugger
        }
    }

    const cleanCanvas = (ctx) => {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.strokeStyle = color;
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
