import React from 'react'
import './DestinationsStyles.css'

import P1 from '../../assets/P1.jpg'
import p6 from '../../assets/p6.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.png'
import p5 from '../../assets/p5.png'
import P2 from '../../assets/p2.jpeg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Place</h1>
                <p>On the Sri Lanka's Best Places.</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={P1} alt="/"/>
                    <img className=' image-grid-row-2' src={p6} alt="/"/>
                    <img className='span-3 image-grid-row-2' src={p3} alt="/"/>
                    <img className='span-3 image-grid-row-2'src={p4} alt="/"/>
                    <img className=' image-grid-row-2' src={P2} alt="/"/>
                    <img className='span-3 image-grid-row-2'src={p5} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
