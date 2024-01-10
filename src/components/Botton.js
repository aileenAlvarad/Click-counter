import React from 'react'; 
import '../stylesheet/button.css';

function Button({ text, itIsClickButton, handleClick }) {
    return  ( 
        <button 
        className= { itIsClickButton ? "click-button" : "restart-button" }
        onClick={handleClick}> 
            {text}
        </button>
    );
} 
export default Button;