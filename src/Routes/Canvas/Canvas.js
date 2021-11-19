import { useState } from 'react';
import { PaintCanvas } from '../../components/PaintCanvas/PaintCanvas.js';
import PaintToolsContainer from '../../components/PaintToolsContainer/PaintToolsContainer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Canvas.css';
// TODO clear canvas
// TODO get user click [x]
// TODO turn canvas black again


export default function Canvas() {
    const [ color, setColor ] = useState('#fff');
    const [ brushSize, setBrushSize ] = useState('4');
    const [canvasColor, setCanvasColor] = useState('#000');

    // grabs hex value from ColorPicker
    const getColor = (color) => {
        setColor(color);
    };

    // Grabs BrushSize from slider
    const getBrushSize = (brushSize) => {
        setBrushSize(brushSize);
    }

    const clearCanvas = () => {
        // Switches between different hex formats in order to clear canvas
        if(canvasColor === '#000'){
            setCanvasColor('#000000');
        }else{
            setCanvasColor('#000');
        }
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
                <PaintToolsContainer 
                    getColor={getColor} 
                    getBrushSize={getBrushSize} 
                    brushSize={brushSize}
                    clearCanvas={clearCanvas}/>

                <PaintCanvas color={color} brushSize={brushSize} canvasColor={canvasColor}/>
            </div>
        </div>
    )
}
