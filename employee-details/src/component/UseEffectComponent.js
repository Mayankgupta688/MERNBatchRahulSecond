import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffectComponent() {

    var [userList, setUserList] = useState([]);

    var [userDetailsObject, setUserDetailsObject] = useState({
        userName: "Sample",
        userId: "00",
        userAvatar: "None",
        userCreatedAt: "None"
    })

    useEffect(function() {
        axios.get("http://localhost:8000/employees").then(function(response) {
            debugger;
            var employeeList = response.data;
            setUserList(employeeList);
        })  
    }, []);

    function getFormValues(event) {
        axios.post("http://localhost:8000/addemployees", userDetailsObject).then(function(response) {
            alert(response.data)

            axios.get("http://localhost:8000/employees").then(function(response) {
                var employeeList = response.data;
                setUserList(employeeList);
            })  
        })
    } 
    
    function getInputTextboxValue(event) {
        setUserDetailsObject({
            ...userDetailsObject,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <h1>Add Employee:</h1>
            <div>
                <label style={{width: "200px", display: "block"}}>Name: </label>     <input onChange={getInputTextboxValue} value={userDetailsObject.userName} type="text" name="userName" /><br/><br/>
                <label style={{width: "200px", display: "block"}}>Id: </label>       <input onChange={getInputTextboxValue} value={ userDetailsObject.userId } type="text" name="userId" /><br/><br/>
                <label style={{width: "200px", display: "block"}}>Avatar: </label>   <input onChange={getInputTextboxValue} value={ userDetailsObject.userAvatar } type="text" name="userAvatar" /><br/><br/>
                <label style={{width: "200px", display: "block"}}>CreatedAt: </label><input onChange={getInputTextboxValue} value={ userDetailsObject.userCreatedAt } type="text" name="userCreatedAt" /><br/><br/>
                <input type="button" onClick={getFormValues} value="Click To Add" />
            </div><hr/>
            {
                userList.map(function(employee) {
                    return (
                        <>
                            <h1>Employee Name: {employee.name}</h1>
                        </>
                    )
                })
            }
        </>
    )
}