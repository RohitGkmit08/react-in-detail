# React in Detail

Welcome to the React in Detail repository. This workspace contains isolated mini-projects designed to explore core React concepts, hooks, state patterns, and optimizations.

---

## Workspace Directory

* **controlled-component**: Form handling with React-driven inputs and dynamic validations (simple login form and unified state object registration form).
* **effects**: Utilizing `useEffect` for data fetching, exploring dependency array behaviors, and side-effect cleanups.
* **memo**: Performance optimization using `useMemo` to cache expensive calculations.
* **callback**: Caching function references with `useCallback` to prevent child re-renders (integrating with `React.memo`).
* **ref**: Accessing DOM elements and maintaining render-persistent state without re-rendering using `useRef`.
* **stateLifting**: Elevating search and filtering state to the nearest parent to coordinate sibling components.
* **project**: The main capstone Employee Dashboard project integrating these patterns.

---

## Main Project: Employee Dashboard (/project)

The Employee Dashboard is the capstone project in this workspace, applying components, state lifting, and hooks.

### Component Directory

| Component | Props Received | Purpose |
| :--- | :--- | :--- |
| **`Header`** | None | Static dashboard header. |
| **`SearchBar`** | `searchText`, `setSearchText` | Updates search term query. |
| **`EmployeeForm`** | `setEmployees` | Manages registration forms; utilizes `useRef` for auto-focus. |
| **`EmployeeList`** | `employees` | Loops and renders employee cards. |
| **`EmployeeCard`** | None (Pending) | Displays details for a single employee record. |
| **`Statistics`** | `employees` | Aggregates and displays counts by department. |

### In-Progress Tasks
* Connect EmployeeCard to parent loop data.
* Implement search filtering logic inside App.jsx.
* Implement delete employee functionality via props.
* Complete count calculations in Statistics.

---

## Setup and Quick Start

1. Navigate to any project:
   ```bash
   cd <project-directory-name>
   ```
2. Run installation and start:
   ```bash
   npm install && npm run dev
   ```
