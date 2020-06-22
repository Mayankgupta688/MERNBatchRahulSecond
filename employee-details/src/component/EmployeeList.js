import React from "react";
import employeeList from "../data/employeeList";
import EmployeeDetails from "./EmployeeDetails";

export default function EmployeeList(props) {

    function helloButton(event) {
        alert("Employee Name is: " + event.target.dataset.empname)
    }

    return (
        <div>
            { 
                employeeList.map(function(employee, index) {
                    if(employee.id % 1 === 0) {
                        return (
                            <div key={index}>
                                <EmployeeDetails helloButton={helloButton} theme="red" {...employee}></EmployeeDetails>
                            </div>
                        )
                    } else {
                        return null;
                    }
                })
            }
        </div>
    )
}
