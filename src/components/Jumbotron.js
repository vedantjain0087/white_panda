import React from 'react'

export default function Jumbotron() {
    return (
        <div>
            <h2>Content Store</h2>
            <div id="description">
                <div id="desc_header">
                    Got bulk orders or almost similar orders ? Fill the order brief in an excel sheet
                    <br/>
                </div>
                <div id="desc_body">
                    If you`re wondering about an easy way to place orders in large numbers, we provide a way just customized for that.
                    <br/>
                    Download our excel sheet, and fill the order brief in the prescribed format and submit. In case you need any help, 
                    <u>
                        <a href="javascript:void()">
                        we <br/>
                        are just a click away to assist you in placing your order
                        </a>
                    </u>
                    <br/>
                    <button id="desc_button">Order via Excel Sheet</button>
                </div>
            </div>
        </div>
    )
}
