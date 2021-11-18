import React from 'react'
import ColorPicker from '../ColorPicker/ColorPicker';
import BrushSize from '../BrushSize/BrushSize';
import './PaintToolsContainer.css';

export default function PaintToolsContainer({getColor, getBrushSize, brushSize}) {
    return (
        <div className="PaintToolsContainer">
           <ColorPicker getColor={getColor} />
           <BrushSize getBrushSize={getBrushSize} brushSize={brushSize}/>
        </div>
    )
}
