import { useEffect, useRef, useState } from "react";

const EmployeeForm = ({setEmployees }) => {
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
        <form onSubmit={handleSubmit}>
            <h2>Employee Registration Form</h2>

            <input
                ref={inputRef}
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
            />

            {
                formData.name.length > 0 && formData.name.length < 3 &&
                (
                    <p style={{ color: "red" }}>
                        Name must be at least 3 characters.
                    </p>
                )
            }

            <br />
            <br />

            <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
            />

            {
                formData.email.length > 0 && !formData.email.includes("@") &&
                (
                    <p style={{ color: "red" }}>
                        Email must contain @
                    </p>
                )
            }

            <br />
            <br />

            <select
                name="department"
                value={formData.department}
                onChange={handleChange}
            >
                <option value="">Select Department</option>
                <option value="Developer">Developer</option>
                <option value="HR">HR</option>
                <option value="Testing">Testing</option>
            </select>

            {
                formData.department === "" &&
                (
                    <p style={{ color: "red" }}>
                        Please select a department.
                    </p>
                )
            }

            <br />
            <br />

            <button type="submit">
                Add Employee
            </button>
        </form>
    );
};

export default EmployeeForm;