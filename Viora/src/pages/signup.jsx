import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/signup.css";

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSignup(e) {
        e.preventDefault();
        setError("");
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/"); // redirect to home on success
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                setError("This email is already registered. Please log in.");
            } else {
                setError("Error! Please Enter Email & Password")
            }
        }
    }
    return (
        <div className="container">
        <div className="logo">
            <img
                    src="/images/logo.png"
                    alt="logo Visual"
                />
        </div>
            <div className="left">
                <img
                    src="/images/signup.png"
                    alt="Signup Visual"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
            </div>
            <div className="right">
                <div className="form-card">
                    <h2>Signup</h2>
                <p className="para">Create your account and explore something amazing !</p>
                <form onSubmit={handleSignup}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br /><br />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br /><br />

                    <button type="submit">Create Account</button>
                </form>

                {error && <p style={{ color: "red" }}>{error}</p>}
                <p className="new">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/login")}>
                        Log In
                    </span>
                </p>
                </div>
            </div>
        </div>
    );
}
export default Signup;

