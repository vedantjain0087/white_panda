import React from 'react'
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer'
export default function MainScreen() {
    return (
        <div className="col-md-11" id="main_screen">
            <Navbar/>
            <Content />
            <Footer />
        </div>
    )
}
