import React from 'react'
import ColorPicker from '../ColorPicker/ColorPicker.js';
import BrushSize from '../BrushSize/BrushSize.js';
import Eraser from '../Eraser/Eraser.js';
import ClearCanvas from '../ClearCanvas/ClearCanvas.js';
import Undo from '../Undo/Undo.js';
import './PaintToolsContainer.css';

export default function PaintToolsContainer({getColor, getBrushSize, brushSize, clearCanvas, color}) {
    return (
        <div className="PaintToolsContainer">
           <ColorPicker getColor={getColor} />
           <BrushSize getBrushSize={getBrushSize} brushSize={brushSize}/>
           <Eraser getColor={getColor}/>
           <Undo color={color} brushSize={brushSize}/>
           <ClearCanvas clearCanvas={clearCanvas} />
        </div>
    )
}
