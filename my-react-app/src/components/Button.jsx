import React, { useState } from 'react';


const Button = ({ id, time, setSlot, add, setAdd }) => {
    const [hovere, sethovere] = useState(-10);
    function handleSymbol(id) {
        if (id === 1) {
            setSlot("10:00")
        }
        else if (id === 2) {
            setSlot("10:15")
        }
        else if (id === 3) {
            setSlot("10:30")
        }
        else if (id === 4) {
            setSlot("10:45")
        }
        else if (id === 5) {
            setSlot("11:00")
        }
        else if (id === 6) {
            setSlot("11:15")
        }
        else if (id === 7) {
            setSlot("11:30")
        }
        if (add === id) {
            setAdd(-10);
        }
        else {
            setAdd(id);
        }
    }
    return (
        <button
            onClick={() => handleSymbol(id)}
            style={{ backgroundColor: add === id ? '#64bc6e' : hovere === id ? '#64bc6e' : 'lightgreen' }}
            onMouseEnter={() => sethovere(id)}
            onMouseLeave={() => sethovere(-10)}
        >{time}</button>
    )
}

export default Button
