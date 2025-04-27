import { useEffect, useState } from "react";

export function getDittoName () {
    const [posts,setPosts] = useState({});
    const getName = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
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