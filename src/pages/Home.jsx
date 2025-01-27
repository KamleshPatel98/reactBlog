import React from 'react'

// compoent
import Posts from '../components/Posts'
import Sliders from '../components/Sliders'

export default function Home() {
    return (
        <>
            <div className="container">
                {/* <Sliders /> */}
                    <Posts />
            </div>
        </>
    )
}