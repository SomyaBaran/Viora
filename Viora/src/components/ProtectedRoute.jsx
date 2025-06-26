import { useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            }
            else {
                navigate("/login")
            }
            setLoading(false);
        });
        return () => unsub();
    }, [navigate]);

    if (loading) return <p>Loading...</p>;

    return isLoggedIn ? children : null;
}

export default ProtectedRoute;