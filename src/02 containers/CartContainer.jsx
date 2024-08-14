
import { connect } from 'react-redux';
import Cartda from '../01 ReactRedux/Cart';

const mapStateToProps = state =>({
    cartData:state.CardItems
})

const mapDispatchToProps=dispatch=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(Cartda)