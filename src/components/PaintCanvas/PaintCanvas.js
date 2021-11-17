import React, {useRef, useEffect} from "react";

export const PaintCanvas = () => {
    const canvasRef = useRef(null);
    const mouse = {x: 0, y: 0};

    const handleMouseDown = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);

        
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = '#000000';
        ctx.canvas.width = window.innerWidth - 100;
        ctx.canvas.height = window.innerHeight;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        ctx.strokeStyle = "white";
    }, []);

    return (
        <div id="sketch">
            <canvas ref={canvasRef} onMouseDown={handleMouseDown}/>
        </div>
    )
}
