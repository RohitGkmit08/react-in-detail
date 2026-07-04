# Employee Dashboard Project

This directory contains the Employee Dashboard application implementing state lifting, form handling, and references.

---

## State and Component Map

* **App.jsx**: Manages root state (`employees` array and `searchText` query) and distributes them via props.
* **Header.jsx**: Renders top dashboard title.
* **SearchBar.jsx**: Input element updating parent `searchText`.
* **EmployeeForm.jsx**: Handles registration input controls, performs validation rules (name length, email syntax, department selection), and uses `useRef` to auto-focus inputs.
* **EmployeeList.jsx**: Receives employee list and maps them.
* **EmployeeCard.jsx**: Renders individual employee records.
* **Statistics.jsx**: Computes department metrics.

---

## Setup and Development

```bash
npm install
npm run dev
```
