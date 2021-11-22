import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import { useRef } from "react";


export default function Undo({getColor, color}) {
    const images = useSelector(state => state.images);
    const canvasRef = useRef(null);

    const handleUndo = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const eraseCoords = images[images.length - 1];
        const currColor = color;
        getColor('#000');
        ctx.beginPath();

        for (let i = 0; i < eraseCoords.length; i++) { //draw and erase the line drawn
            //need to account for brush size later
            const coord = eraseCoords[i];
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.lineTo(coord.x, coord.y);
            ctx.stroke();
        }
        getColor(currColor);
    }

    return (
        <div>
           <div>Undo</div>
           <FontAwesomeIcon icon={faUndo} onClick={handleUndo}/>
        </div>
    )
}
