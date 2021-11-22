import ColorBox from '../ColorBox/ColorBox';
import './ColorBoxContainer.css';

// TODO Display 12 ColorBox Components in the ColorBox Container [x]
// TODO Have Each ColorBox Component Carry its own specific color [x]
// TODO get that color and update the color state [x]
// TODO update the swatch color when clicking on the default color []

export default function ColorBoxContainer({getColor}) {
    
    return (
        <div className="color-box-container">
           <ColorBox getColor={getColor} color={'black'} />
           <ColorBox getColor={getColor} color={'white'} />
           <ColorBox getColor={getColor} color={'gray'} />
           <ColorBox getColor={getColor} color={'brown'} />
           <ColorBox getColor={getColor} color={'red'} />
           <ColorBox getColor={getColor} color={'pink'} />
           <ColorBox getColor={getColor} color={'orange'} />
           <ColorBox getColor={getColor} color={'yellow'} />
           <ColorBox getColor={getColor} color={'green'} />
           <ColorBox getColor={getColor} color={'lime'} />
           <ColorBox getColor={getColor} color={'blue'} />
           <ColorBox getColor={getColor} color={'purple'} />
        </div>
    )
}
