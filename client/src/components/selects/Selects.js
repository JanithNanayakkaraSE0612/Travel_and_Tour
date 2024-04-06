import React from 'react'
import './SelectsStyles.css'

import Galle from '../../assets/Galle.jpg'
import Hikkaduwa from '../../assets/hikkaduwa.jpg'
import Yala from '../../assets/Yala.jpg'
import Kandy from '../../assets/Kandy.jpg'
import NuwaraEliya from '../../assets/nuwala eliya.jpg'
import Badulla from '../../assets/Badulla.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Galle} text='Galle' />
                <SelectsImg bgImg={Hikkaduwa} text='Hikkaduwa' />
                <SelectsImg bgImg={Yala} text='Yala' />
                <SelectsImg bgImg={Kandy} text='Kandy' />
                <SelectsImg bgImg={NuwaraEliya} text='Nuwara Eliya' />
                <SelectsImg bgImg={Badulla} text='Badulla' />
            </div>

        </div>
    )
}

export default Selects
