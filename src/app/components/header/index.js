import React ,{Component}from 'react'

class Header extends Component {
    render(){
        return (
            <div className="App">
                <h1>Welcome to Redux with React Tutorial</h1>
                <div className="add-to-cart"> 
                    <img src="https://cdn.iconscout.com/icon/free/png-256/add-to-cart-1786272-1519648.png"/>
                </div>
            </div>
        )
    }
}
export default Header;