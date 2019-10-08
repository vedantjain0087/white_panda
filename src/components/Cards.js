import React, { Component } from 'react'

export default class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
       <div className="card_wrapper">
       {this.props.cardData.map((c,i) => {
         return     <div key={c.key} className="card_container">
         <div className="card_header">
             <img src="/images/peacock.png"/>
             <div className="card_title">
                 <span className="card_title_main">{c.title}</span>
                 <span className="card_title_price">from <i className="fa fa-inr" aria-hidden="true"></i>{c.price}</span>
             </div>
         </div>
         <div className="card_body">
             {c.body}
             <br/>
             <button className="card_button">Order</button>
         </div>
     </div>
    })}
       </div>
       
    )
}
}
