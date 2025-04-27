import React, { useEffect, useState } from 'react'
import { useDittoName, useFetch } from './hooks/useFetch'
//application will fetch data from a demo site
///then eventually do this while using custom hooks

const App2 = () => {
    // using custon hooks 
    const name = useDittoName();
    const data = useFetch("https://pokeapi.co/api/v2/pokemon/ditto")
    console.log({data})
    return (
    <div>
        {/* Yo B! {posts} */}
        YO B!{name}
    
        <br />
        <br />
        {JSON.stringify(data.name)}
    </div>
  )
}

export default App2