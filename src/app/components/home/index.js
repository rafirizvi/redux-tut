import React, { Component } from 'react'
class Home extends Component {

    constructor(props){
        super(props);
        console.log('home',props);
    }
    render() {
        return (
            <div>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src="https://www.pinclipart.com/picdir/big/95-950676_iphone-clipart-cell-phone-apple-iphone-x-space.png" />
                    </div>
                    <div className="text-wrapper item">
                        <span>
                            I-Mobile
                        </span>
                        <span>
                            Price : $100.00
                        </span>
                    </div>
                    <div className="btn-wrapper item">
                        <button onClick={()=>
                        this.props.addToCartHandler({name:'iPhone',price:100})}>Add To Cart</button>
                    </div>

                </div>
            </div>
        )
    }

}
export default Home
