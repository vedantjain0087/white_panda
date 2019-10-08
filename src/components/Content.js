import React from 'react'
import Jumbotron from './Jumbotron';
import Cards from './Cards';

var cardData = [
    {
        key:0,
        title:"Blog/Article",
        price:"500",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        key:1,
        title:"Newsletter/E-mailer",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        key:2,
        title:"Whitepaper",
        price:"2000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        key:3,
        title:"e-book",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        key:4,
        title:"Report/Guide",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        key:5,
        title:"Product Description",
        price:"500",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        key:6,
        title:"Website Content",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },   
    {
        key:7,
        title:"Video Script",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        key:8,
        title:"Company Profile",
        price:"2000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        key:9,
        title:"Press Release",
        price:"2000",
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
