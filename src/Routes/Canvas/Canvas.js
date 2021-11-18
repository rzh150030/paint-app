import { useState } from 'react';
import { PaintCanvas } from '../../components/PaintCanvas/PaintCanvas.js';
import PaintToolsContainer from '../../components/PaintToolsContainer/PaintToolsContainer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Canvas.css';

export default function Canvas() {
    const [ color, setColor ] = useState('#FFF');
    const [ brushSize, setBrushSize ] = useState('1');

    // grabs hex value from ColorPicker
    const getColor = (color) => {
        setColor(color);
    };

    // Grabs BrushSize from slider
    const getBrushSize = (brushSize) => {
        setBrushSize(brushSize);
    }


    return (
        <div className='canvas'>
            <header className="paint-header">
                <Link to='/'>
                    <FontAwesomeIcon icon={faArrowCircleLeft} style={{fontSize: "3rem", marginTop: "11px"}}/> 
                </Link>
                <h1 id="paint-text">Draw your creations here!</h1> 
            </header>
            
            <div className="paint-content">                
                <PaintToolsContainer getColor={getColor} getBrushSize={getBrushSize} brushSize={brushSize}/>
                <PaintCanvas color={color} brushSize={brushSize} />
            </div>
        </div>
    )
}
