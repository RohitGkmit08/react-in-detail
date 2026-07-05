import { useEffect, useRef, useState } from "react";

const EmployeeForm = ({setEmployees }) => {
    console.log("employee form Rendered");
    const inputRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        department: ""
    });

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name.trim() === "" || formData.email.trim() === "" || formData.department.trim() === "") {
            alert("Please fill all the fields.");
            return;
        }

        const newEmployee = {
            id: Date.now(),
            ...formData
        };

        setEmployees((prev) => [...prev, newEmployee]);

        setFormData({
            name: "",
            email: "",
            department: ""
        });

        inputRef.current.focus();
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2 className="section-title">Employee Registration Form</h2>

            <input
                ref={inputRef}
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
            />

            <p className="error-text" style={{ color: "red", visibility: formData.name.length > 0 && formData.name.length < 3 ? "visible" : "hidden" }}>
                Name must be at least 3 characters.
            </p>

            <input
                className="form-input"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
            />

            <p className="error-text" style={{ color: "red", visibility: formData.email.length > 0 && !formData.email.includes("@") ? "visible" : "hidden" }}>
                Email must contain @
            </p>

            <select
                className="form-input"
                name="department"
                value={formData.department}
                onChange={handleChange}
            >
                <option value="">Select Department</option>
                <option value="Developer">Developer</option>
                <option value="HR">HR</option>
                <option value="Testing">Testing</option>
            </select>

            <p className="error-text" style={{ color: "red", visibility: formData.department === "" ? "visible" : "hidden" }}>
                Please select a department.
            </p>

            <button className="btn-submit" type="submit">
                Add Employee
            </button>
        </form>
    );
};

export default EmployeeForm;