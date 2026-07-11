import React from "react";

const EmployeeCard = React.memo(({ employee, onDelete }) => {

    console.log(`${employee.name} Card Rendered`);

    return (
        <div className="employee-card">
            <p>Name: {employee.name}</p>
            <p>Email: {employee.email}</p>
            <p>Department: {employee.department}</p>

            <button onClick={() => onDelete(employee.id)}>
                Delete
            </button>
        </div>
    );
});

export default EmployeeCard;