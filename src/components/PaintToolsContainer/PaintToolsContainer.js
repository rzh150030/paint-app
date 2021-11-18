import React from 'react'
import ColorPicker from '../ColorPicker/ColorPicker.js';
import BrushSize from '../BrushSize/BrushSize.js';
import Eraser from '../Eraser/Eraser.js';
import './PaintToolsContainer.css';

export default function PaintToolsContainer({getColor, getBrushSize, brushSize}) {
    return (
        <div className="PaintToolsContainer">
           <ColorPicker getColor={getColor} />
           <BrushSize getBrushSize={getBrushSize} brushSize={brushSize}/>
           <Eraser getColor={getColor}/>
        </div>
    )
}
