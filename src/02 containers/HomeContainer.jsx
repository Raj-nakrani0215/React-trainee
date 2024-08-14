import Home from '../01 ReactRedux/Home';
import { connect } from 'react-redux';
import { addToCart, removeToCart } from '../03 services/Actions/actiones';

const mapStateToProps = state => ({
    cartData: state.CardItems
});

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
