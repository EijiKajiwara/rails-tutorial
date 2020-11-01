import { connect } from 'react-redux'
import Counter from '../components/counter'
import {
  countUp,
  countDown
} from '../actions'

const mapStateToProps = (state) =>{
  return{
    count: state.count.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onClickCountUp: () => dispatch(countUp()),
    onClickCountDonw: () => dispatch(countDown())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(Counter)