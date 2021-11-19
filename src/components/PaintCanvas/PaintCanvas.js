import React, {useRef, useEffect} from "react";

export const PaintCanvas = ({color, brushSize, canvasColor}) => {
    
    const canvasRef = useRef(null);
    const mouse = {x: 0, y: 0};

    const handleMouseDown = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);

        canvas.addEventListener("mousemove", onPaint, false);
    };

    const handleMouseUp = () => {
        const canvas = canvasRef.current;
        canvas.removeEventListener("mousemove", onPaint, false);
    };

    const updateMouseCoord = (e) => {
        const canvas = canvasRef.current;
        mouse.x = e.pageX - canvas.offsetLeft;
        mouse.y = e.pageY - canvas.offsetTop;
    };

    const onPaint = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerWidth - 100;
        ctx.canvas.height = window.innerHeight;
        ctx.fillStyle = canvasColor;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }, [canvasColor]);

    return (
        <div id="sketch">
            <canvas ref={canvasRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={updateMouseCoord}/>
        </div>
    )
}
