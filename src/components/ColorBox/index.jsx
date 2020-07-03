import React, { useState } from 'react';
import  './ColorBox.scss';

function getRandomColor() {
    const COLOR_LIST = ["green", "blue", "yellow", "orange","black"];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
};

function ColorBox() {
    const initColor =  localStorage.getItem('box-color') || 'deeppink';
    const [color,setColor] = useState(initColor);
    function handleBoxClick()
    {
        //get random color -> set color
        const newcolor = getRandomColor();
        setColor(newcolor);
        localStorage.setItem('box-color',newcolor);
    }

    return (
        <div className="color-box"
        style = {{backgroundColor:color}}
        onClick = {handleBoxClick}
        >
        </div>
    );
}
export default ColorBox;
