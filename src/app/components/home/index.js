import React, { Component } from 'react'
class Home extends Component {

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
                        <button>Add To Cart</button>
                    </div>

                </div>
            </div>
        )
    }

}
export default Home
