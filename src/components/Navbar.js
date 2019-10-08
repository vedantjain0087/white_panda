import React from 'react'

export default function Navbar() {
    return (
        <div className="row" id="navbar">

                <div className="col-md-7">
                    <img src="images/logo.png" alt="Logo"/>
                </div>
                <div className="col-md-5 rightNav">
                    <div className="icon_container">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                    </div>
                    <div className="icon_container">
                       <div id="profile_picture">
                           AB
                       </div>
                    </div>
                </div>
        </div>
    )
}
