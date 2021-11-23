import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux';
import { undoAction } from "../../store/reducer";

export default function Undo({color, brushSize}) {
    const dispatch = useDispatch();
    const images = useSelector(state => state.images);
    const canvas = useSelector(state => state.canvas);

    const handleUndo = () => {
        const ctx = canvas.getContext("2d");
        dispatch(undoAction());
        cleanCanvas(ctx);

        if (images.length) {
            for (let i = 0; i < images.length; i++) {
                const coords = images[i];
                ctx.beginPath();
                ctx.moveTo(coords[0].x, coords[0].y);

                for (let j = 1; j < coords.length; j++) {
                    const coord = coords[j];
                    ctx.lineWidth = coord.brushSize;
                    ctx.strokeStyle = coord.color;
                    ctx.lineJoin = "round";
                    ctx.lineCap = "round";
                    ctx.lineTo(coord.x, coord.y);
                    ctx.stroke();
                }
            }
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
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
