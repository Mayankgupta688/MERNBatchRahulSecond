import React from "react";
import greenTheme from "../theme/green";
import redTheme from "../theme/red";

export default function EmployeeDetails(props) {
    var theme = null;

    props.name = "Random";

    if(props.theme === "green") {
         theme = greenTheme
    } else {
        theme = redTheme;
    }

    return (
        <div>
            <img src={props.avatar} alt={props.name} style={theme.image} />
            <h2 style={theme.h2}>Employee Name: {props.name}</h2>
            <h3> Employee Id: {props.id}</h3>
            <input data-empname={props.name} data-empid={props.id}
                data-avatar={props.avatar}
                type="button" onClick={props.helloButton} value="Click For Details" /><hr/>
        </div>
    )
}
