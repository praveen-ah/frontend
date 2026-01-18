import { useState, useEffect } from 'react';
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [dummy, setDummy] = useState(true);
    const [error, setError] = useState(null);


     useEffect(() => {
        // console.log("use effect called");
        // console.log(dummy);
        setTimeout(() => {
        fetch(url)
        .then(response => {
            if(!response.ok){
                throw Error("Data cannot be retrieved")
            }
            console.log(response);
            return response.json()
        }).then(data => setData(data))
        .catch((error)=>{
            console.log(error.message);
            setError(error.message);
        })
    }, 1000)
    },[]);

    return [data, dummy, error]

}

export default useFetch