import './ColorBox.css';

export default function ColorBox({getColor, color}) {
    
    const handleClick = () => {
        console.log(color)
        getColor(color);
    }

    return (
        <div className="color-box" style={{background: color}}onClick={handleClick}>
            
        </div>
    )
}
