// TOMAS GONZALEZ CHIAPPE, FELIPE ARREGUI
import React from 'react'
import Card from '../Components/Card'

import { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {

    const {Odontologos} = useContext(ContextGlobal)

    const { Theme } = useContext(ContextGlobal)

    

    return (
        <div className='home' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h1>Home</h1>
            <div className='card-grid'>
                {Odontologos.map(data => {
                    return <Card key={data.id}  name={data.name} username={data.username} id={data.id} show={true}/>
                })}
            </div>
        </div>
    )
}

export default Home