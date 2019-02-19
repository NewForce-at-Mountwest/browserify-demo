

// const getAllEmployees =() => {
//     return fetch("http://localhost:8088/employees")
//     .then(employees => employees.json())
// }

const apiManager = {
    getAllEmployees: () => {
        return fetch("http://localhost:8088/employees")
        .then(employees => employees.json())
    },
    // postNewEmployee: (employeeObject) => {

    // }
}
export default apiManager;