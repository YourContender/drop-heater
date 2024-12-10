import React from 'react'
import { Header } from './header/Header'
import { Footer } from './footer/Footer'
import { Sale } from './sale/Sale'

export const MainCustom = () => {
    return (
        <div>
            <Header/>
            <Sale/>
                Hello world! 
            <Footer/>
        </div>
    )
}
