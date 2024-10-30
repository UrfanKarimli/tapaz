import { useEffect, useState } from "react";

const UserSet = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const handleUserChange = () => {
            const currentUser = JSON.parse(localStorage.getItem("user") || "null");
            setUser(currentUser);
        };

        handleUserChange(); 
        window.addEventListener("userChange", handleUserChange);

        return () => {
            window.removeEventListener("userChange", handleUserChange);
        };
    }, []);

    return user; 
};

export default UserSet;
