import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getToken } from "../utils/localStorage";

export const useProtectedPage = () =>{
    const history = useHistory()
    useEffect(() =>{
        const token = getToken()
        if(!token) {
            history.push("/Login")
        }
    }, [])
}