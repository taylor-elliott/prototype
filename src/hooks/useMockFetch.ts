import { useState, useEffect } from "react";
import axios, { CancelTokenSource } from "axios";

const mockData = [
    {
        id: 1,
        title: "first title mock",
        body: "first body mock",
    },
    {
        id: 2,
        title: "second title mock",
        body: "second body mock",
    },
    {
        id: 3,
        title: "third title mock",
        body: "third body mock",
    },
];

const useMockFetch = <T>(
    url: string,
    deps: React.DependencyList = [],
): { data: T | null; loading: boolean; error: string | null } => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const source: CancelTokenSource = axios.CancelToken.source();

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                setTimeout(() => {
                    setData(mockData as T);
                }, 2000);
            } catch (err: any) {
                if (axios.isCancel(err)) {
                    console.log("request cancelled");
                } else {
                    setError(err.message || "something went wrong");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            source.cancel();
        };
    }, [url, ...deps]);

    return { data, loading, error };
};

export default useMockFetch;
