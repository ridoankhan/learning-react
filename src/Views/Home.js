import React from 'react'
import HelloWorld from '../Components/HelloWorld';


function Home(){
    return(
        <div>
            <h1 className="font-bold mb-3">This is Homepage content</h1>
            <HelloWorld name="Ridoan" />
        </div>
    )
}

export default Home