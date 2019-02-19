const employeeComponent = (singleEmployeeObject) => {
    return `<div>
    <h3>${singleEmployeeObject.firstName} ${singleEmployeeObject.lastName}</h3>
    <p>${singleEmployeeObject.department}</p>
    </div>`
}

export default employeeComponent;