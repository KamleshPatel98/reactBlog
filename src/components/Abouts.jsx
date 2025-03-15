import { useState, useEffect } from "react";

export default function Abouts(){
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const aboutUrl = "https://jsonplaceholder.typicode.com/users/1";

        fetch(aboutUrl)
            .then((response) => {
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setUser(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if(error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className="about">
            <h2>About User</h2>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>Mobile:</strong> {user?.phone}</p>
            <p><strong>Address:</strong> {user?.address?.street}, {user?.address?.city}</p>
        </div>
    )
}