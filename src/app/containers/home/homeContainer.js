import {connect} from 'react-redux'
import Home from '../../components/home/index'
//import {addToCartAction} from '../../redux/actions/addToCartAction'
import { addToCart } from '../../redux/actions/addToCartAction'



const mapStateToProps=(state)=>{
    return {
        cardData:state
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        addToCartHandler:data => dispatch(addToCart(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;