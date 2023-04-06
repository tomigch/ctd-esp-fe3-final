// TOMAS GONZALEZ CHIAPPE, FELIPE ARREGUI
import React from 'react'
import Form from '../Components/Form'

import { useContext } from 'react'
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {

    const { Theme } = useContext(ContextGlobal)
    
    return (
        <div className='contact' style={{background:Theme.backgroundHome, color:Theme.color}}>
            <h2>You want to know more?</h2>
            <p>Send us your questions and we will contact you</p>
            <Form/>
        </div>
    )
}

export default Contact