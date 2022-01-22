import { useState, useEffect } from "react";
import axios from "axios";

export const useAxios = (url, initialState) => {

    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch(err => {
            console.log(err);
            setError(err);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [url]);

    return [data, isLoading, error];

};