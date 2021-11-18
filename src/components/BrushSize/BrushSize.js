import React, { useState } from 'react';
import './BrushSize.css';

// TODO Grab the value for brush size from input

export default function BrushSize({getBrushSize, brushSize}) {
    
    
    const getSliderValue = ({target}) => {
       getBrushSize(target.value)
    }
    
    return (
        <div>
            <label>Brush Size: {brushSize} <input id='brush-size' value={brushSize} type='range' min='1' max='20' step='0.5' onChange={getSliderValue} /> </label>
        </div>
    )
}
