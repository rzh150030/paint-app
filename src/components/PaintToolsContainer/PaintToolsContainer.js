import React from 'react'
import ColorPicker from '../ColorPicker/ColorPicker.js';
import BrushSize from '../BrushSize/BrushSize.js';
import Eraser from '../Eraser/Eraser.js';
import ClearCanvas from '../ClearCanvas/ClearCanvas.js';
import ColorBoxContainer from '../ColorBoxContainer/ColorBoxContainer.js';
import './PaintToolsContainer.css';

export default function PaintToolsContainer({getColor, getBrushSize, brushSize, clearCanvas}) {
    return (
        <div className="PaintToolsContainer">
           <ColorPicker getColor={getColor} />
           <ColorBoxContainer getColor={getColor} />
           <BrushSize getBrushSize={getBrushSize} brushSize={brushSize}/>
           <Eraser getColor={getColor}/>
           <ClearCanvas clearCanvas={clearCanvas} />
        </div>
    )
}
