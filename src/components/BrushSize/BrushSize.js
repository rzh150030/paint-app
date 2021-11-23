import './BrushSize.css';

// TODO Grab the value for brush size from input

export default function BrushSize({getBrushSize, brushSize}) {
    
    
    const getSliderValue = ({target}) => {
       getBrushSize(target.value)
    }
    
    return (
        <div>
            <div className='tool-name'>Brush Size: {brushSize} </div>
                <input id='brush-size' value={brushSize} type='range' min='1' max='60' onChange={getSliderValue} /> 
           
        </div>
    )
}
