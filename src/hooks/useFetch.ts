import { useState, useEffect } from "react";
import axios, { CancelTokenSource } from "axios";

const useFetch = <T>(
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
                const response = await axios.get<T>(url, {
                    cancelToken: source.token,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                setData(response.data);
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

export default useFetch;
