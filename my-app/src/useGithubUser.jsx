import { useEffect, useState } from "react"

export function useGithubUser (username) {

    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    async function fetchData(){
        setError(null)
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const json = await response.json()
            setData(json)
            


        } catch (error) {
            setError(error)
        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return {
        user: data,
        isLoading: !data && !error,
        isError: error,
      };
    
    
}