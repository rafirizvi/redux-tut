import React from 'react'
// import Header from './components/header/index'
// import Home from './components/home/index'
import Header from './containers/header/headerContainer'
import Home from './containers/home/homeContainer'
export default function RootApp() {
    return (
        <div>
            <Header />
            <Home />
        </div>

    )
}