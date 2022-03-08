import React from 'react';

function Fruitcounter({title,counter,setCounter}) {

    function decreaseCounter(){
        setCounter(counter-1)
    }
    function increaseCounter(){
        setCounter(counter+1)
    }

    return (
        <div className="fruit-counter">
            <h2>{title}</h2>
            <button
                type="button"
                onClick={decreaseCounter}
                disabled={counter===0}
            >-</button>
            {counter}
            <button
                type="button"
                onClick={increaseCounter}
            >+</button>
        </div>
    );
}

export default Fruitcounter;