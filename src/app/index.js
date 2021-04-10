import React from 'react'
import { Provider } from 'react-redux'

import Header from './containers/header/headerContainer'
import Home from './containers/home/homeContainer'
import appStore from './redux/store'
export default function RootApp() {
   // console.log('appStore',appStore);
    return (
            <Provider store={appStore}>
                <Header />
                <Home />
            </Provider>
    )
}