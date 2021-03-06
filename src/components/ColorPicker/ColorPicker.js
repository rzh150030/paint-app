import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import reactCSS from 'reactcss';
import './ColorPicker.css';


export default function ColorPicker({getColor, color}) {

    // const [color, setColor] = useState({ r: '255', g: '255', b: '255', a: '1'});

    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    // Toggles ChromePicker to the screen
    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const handleChange = (color) => {
        getColor(color.hex);
        // setColor(color.rgb);
    };

    // styles for ChromePicker and Swatch
    const styles = reactCSS({
        'default': {
          color: {
            width: '45px',
            height: '16px',
            borderRadius: '2px',
            background: `${color}`,
          },
          swatch: {
            padding: '5px',
            background: '#000',
            margin: '0 10px',
            borderRadius: '5px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
          },
          popover: {
            position: 'absolute',
            zIndex: '2',
          },
          cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      });

    return (
        <div>
            <div>
                <div className="tool-name">Color</div>
                <div style={ styles.swatch } onClick={ handleClick }>
                    <div style={ styles.color } />
                </div>

                {/* Toggles ChromePicker to display on screen */}
                { 
                    displayColorPicker ? <div style={ styles.popover }>
                    <div style={ styles.cover } onClick={ handleClose }/>
                        <ChromePicker color={ color } onChange={ handleChange } />
                    </div> : null
                }
            </div>
        </div>
    )
}
