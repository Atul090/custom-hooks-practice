import { useEffect, useState } from "react";

//we can create js or jsx files for maiking hooks

export function useDittoName () {
    const [posts,setPosts] = useState({});
    const getName = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        console.log(response);
        const data = await response.json();
        console.log("data",data)
        setPosts(data);
    } 
    useEffect(()=>{
        getName()
    },[])
    return posts.name;
}

export function useFetch(url) {
    const [finalData,setFinalData]=useState({});
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            console.log("data",data)   
            setFinalData(data);
            setLoading(false);
        }
        getData();
    },[url])

    return {finalData,loading};
}

// export function useFetch(url) {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const getData = async () => {
//             setLoading(true);
//             const response = await fetch(url);
//             const result = await response.json();
//             console.log("data", result);
//             setData(result);
//             setLoading(false);
//         };
//         getData();
//     }, [url]);

//     return { data, loading };
// }