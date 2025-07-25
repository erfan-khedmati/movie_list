import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchData = async ( )=> {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                if(!response.ok) throw new Error(`HTTP ERROR STATUS: ${response.status}`);
                const result = await response.json();
                setData(result);
            } catch(err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url])

    return {data, loading, error};
}

export default useFetch;