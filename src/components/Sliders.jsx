import {SlidersData} from '../data/SlidersData'

//useState
import {useState} from 'react'

// components
// import Slider from './Slider'

export default function Sliders(){
    const [sliders, setSliders] = useState(SlidersData)
    return (
        <section className='sliders'>
            {
                sliders.map(({image},index) => 
                    <Slider key={index} image={image} />
                )
            }
        </section>
    )
}