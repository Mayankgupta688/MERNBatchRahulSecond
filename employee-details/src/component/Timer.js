import React, {useState} from "react";

export default function Timer(props) {
    var interval = null
    var [currentCounter, setCurrentCounter] = useState(new Date().getSeconds())
    if(interval) {
        clearInterval(interval);
    }
    interval = setTimeout(function() {
        console.log(new Date().getSeconds())
        setCurrentCounter(new Date().getSeconds());
    }, 1000)

    return (
        <div>
            <h1>Timer is: {currentCounter}</h1>
        </div>
    );
    
}