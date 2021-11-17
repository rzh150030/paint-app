import React, {useRef, useEffect} from "react";

export const PaintCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = '#000000'
        ctx.canvas.width = window.innerWidth - 100;
        ctx.canvas.height = window.innerHeight;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }, [])

    return (
        <canvas ref={canvasRef} />
    )
}
