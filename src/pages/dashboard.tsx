import useFetch from "../hooks/useFetch";

interface User {
    id: number;
    name: string;
    email: string;
}

const Dashboard = () => {
    const { data, loading, error } = useFetch<User>(
        "https://jsonplaceholder.typicode.com/users/1",
    );

    if (loading) return <></>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{data?.name}</h1>
            <p>{data?.email}</p>
        </div>
    );
};

export default Dashboard;
