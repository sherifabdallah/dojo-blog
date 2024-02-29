import { useState, useEffect } from "react";

// Custom Hook
// This hook is used to handle the state of a form input field. It takes an initial value

const useFetch = (url) => {


    const [data, setData] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [isError, setisErorr] = useState(null);
    



    useEffect(() => {


        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for some resource");
                }
                return res.json();
            })
            .then(data => {
                // when data is ready
                setData(data);
                setisLoading(false);
                setisErorr(null)
            })
            .catch(err => {
                setData(null);
                setisLoading(false);
                setisErorr(err.message);
            }) // any kind of network error


    }, [url]);

    return { data, isLoading, isError };

}

export default useFetch;