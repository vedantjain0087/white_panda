import React from 'react'
import Jumbotron from './Jumbotron';
import Cards from './Cards';

var cardData = [
    {
        title:"Blog/Article",
        price:"500",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Newsletter/E-mailer",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Whitepaper",
        price:"2000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"e-book",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Report/Guide",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Product Description",
        price:"500",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Website Content",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },   
    {
        title:"Video Script",
        price:"1000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
        title:"Company Profile",
        price:"2000",
        body:`Typically 450-400 words, an e-book is
        perfect for your target audience ranging
        from prospective customers to users. `,
    },
    {
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
