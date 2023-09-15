import React, { useState } from 'react'

function Box({ initialRandomColor }) {
    
    //UseState are use to manage the statge of color onchange
    const [color, setColor] = useState(initialRandomColor);

    // getRandomColor Function generate the new color 
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // BOX UI
    return (
        <div className='box' style={{ backgroundColor: color }} onClick={() => setColor(getRandomColor())}></div>
    );
}

export default Box;