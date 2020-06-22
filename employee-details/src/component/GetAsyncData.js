
import React, { useState } from "react";
import axios from "axios";

export default function GetAsyncData() {

    var [userList, setUserList] = useState([])
    if(userList.length === 0) {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then(function(response) {
            var employeeList = response.data;
            setUserList(employeeList);
        })
    }
    return(
        <div>
            <h1>Hello All Employee....</h1>
            {
                userList.map(function(employee) {
                    return (
                        <div>
                            <h1>Employee Name: {employee.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}