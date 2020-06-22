import React, {useState} from "react";
import axios from "axios";

window.salary = 1000;


export default function EmployeeForm() {
    var [counter, setCounter] = useState(0);
     setTimeout(()=>{
        setCounter(counter+1);
     },1000);

    var [user, setUser] = useState({
        userName: "Abc",
        userAge: 20,
        userDesignation: "Developer Intern"
    });

    setTimeout(() => {
        window.salary = window.salary + 10;
        console.log(window.salary)
    }, 2000)

    function updateUserData(event) {
        var keyName = event.target.id;
        setUser({
            ...user,
            [keyName]: event.target.value
        })
    }

    return (
        <div>
            Name: <input type="text" id="userName" value={user.userName} onChange={updateUserData} /><br/><br/>
            Age: <input type="text" id="userAge" value={user.userAge} onChange={updateUserData}  /><br/><br/>
            Designation: <input id="userDesignation" type="text" value={user.userDesignation} onChange={updateUserData} /><br/><br/>
            Counter Value: {counter}<br/><br/>

            <ShowData userNameData={user.userName} userAgeData={user.userAge} salary={window.salary}></ShowData>
        </div>
    )
}

function ShowData(props) {
    return (
        <div>
            <h1>Name: {props.userNameData}</h1>
            <h2>Age: {props.userAgeData}</h2>
            <h3>Salary: {props.salary}</h3>
        </div>
    )
}