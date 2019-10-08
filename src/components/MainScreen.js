import React from 'react'
import Navbar from './Navbar';
import Content from './Content';
export default function MainScreen() {
    return (
        <div className="col-md-11" id="main_screen">
            <Navbar/>
            <Content />
        </div>
    )
}
