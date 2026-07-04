import { useState } from "react"

const App = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>Simple form</h2>
      <input 
        value={email}
        placeholder="enter your email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {
        email.length > 4 && !email.includes("@") && <p>Email must contain @</p>
      }
      <br></br>
      <input
        value={password}
        placeholder="enter your password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {
        password.length > 0 && 
        password.length < 8 && 
        <p>Password should contain atleast 8 characters </p>
      }
    </div>
  )
}

export default App