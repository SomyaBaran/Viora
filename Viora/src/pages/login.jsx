import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        }
        catch {
            setError("Login failed! Check your email and password");
        }
    };

    return (
        <div className="login-container">
            <div className="Logo">
                <img
                    src="/images/logo.png"
                    alt="logo Visual"
                />
            </div>
            <div className="left-login">
                <img
                    src="/images/login.png"
                    alt="Login Visual"
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
            </div>

            <div className="right-login">
                <div className="cards">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <br />
                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br />
                        <button type="submit">Login</button>
                    </form>
                    <div style={{ height: "24px" }}>
                        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Login;

