
import apiManager from "./apiManager.js"
import employeeComponent from "./singleEmployee.js"

const printAllEmployees = () => {
    apiManager.getAllEmployees()
    .then((parsedEmployees) => {
        parsedEmployees.forEach(singleEmployeeObject => {
            document.querySelector("#employee-list").innerHTML += employeeComponent(singleEmployeeObject)

        })
    })
}

export default printAllEmployees;
