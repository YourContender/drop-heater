import React from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Sale } from './sale/Sale'
import { Main } from './main/Main'
import { Cards } from './cards/Cards'

export const MainCustom = () => {
    return (
        <div>
            <Header/>
            <Main/>
            {/* <Sale/> */}
            <Cards/>
                Hello world! 
            <Footer/>
        </div>
    )
}
