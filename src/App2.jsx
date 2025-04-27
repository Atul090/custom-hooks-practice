import React, { useEffect, useState } from 'react'
import { useDittoName } from './hooks/getDitto'
//application will fetch data from a demo site
///then eventually do this while using custom hooks


const App2 = () => {
    // using custon hooks 
    const name = useDittoName();

    return (
    <div>
        {/* Yo B! {posts} */}
        YO B!{name}
    </div>
  )
}

export default App2