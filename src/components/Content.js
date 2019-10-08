import React from 'react'
import Jumbotron from './Jumbotron';
import Cards from './Cards';
var cardData = [
    {
        title:"Blog/Article",
        price:"from 500",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Blog/Article",
        price:"from 500",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Blog/Article",
        price:"from 500",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Blog/Article",
        price:"from 500",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },  
]

export default function Content() {
    return (
        <div id="contentContainer">
            <Jumbotron />
            <Cards cardData={cardData}/>
        </div>
    )
}
