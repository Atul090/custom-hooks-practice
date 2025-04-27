import React, { useEffect, useState } from 'react'
import { useFetch } from './hooks/useFetch'

const App3 = () => {
    const [current, setCurrent] = useState(1);
    const {finalData,loading} = useFetch("https://pokeapi.co/api/v2/pokemon/"+current);
    // console.log()
    // console.log(data)
    if(loading){
        return <div>
            Loading!  
        </div>
    }
    return (
    <div>
        <button onClick={()=>setCurrent(1)}>1</button>
        <button onClick={()=>setCurrent(2)}>2</button>
        <button onClick={()=>setCurrent(3)}>3</button>
        {/* {JSON.stringify(data.name)}
         */}
         {JSON.stringify(finalData.name)} 
         <div>
            {/* {finalData} */}
         {/* {finalData && finalData.name ? <div>{finalData.name}</div> : <div>No data available</div>} */}
         </div>
    </div>
  )
}

export default App3