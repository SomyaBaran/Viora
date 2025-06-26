import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function Home() {

    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <div>
            <h2>Welcome to Viora 🌸</h2>
            <p>You're logged in!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Home;