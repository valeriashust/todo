import { connect } from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = (state) => ({
    loading: state.loading
});

export default connect(
    mapStateToProps
)(Home)