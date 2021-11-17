import React from 'react'
import ColorPicker from '../ColorPicker/ColorPicker';
import './PaintToolsContainer.css';

export default function PaintToolsContainer({getColor}) {
    return (
        <div className="PaintToolsContainer">
           <ColorPicker getColor={getColor} />
        </div>
    )
}
