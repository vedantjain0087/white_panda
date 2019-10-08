import React from 'react'

export default function Drawer() {
    return (
        <div className="col-md-1" id="drawer">
        <div id="sidebar_ico">
            <div className="drawer_icon_container active_drawer">
            <i className="fa fa-th-large" aria-hidden="true"></i>
            </div>
            <div className="drawer_icon_container">
            <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="drawer_icon_container">
            <i className="fa fa-gift" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    )
}
