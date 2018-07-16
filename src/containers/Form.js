import { connect } from 'react-redux'
import AddForm from '../components/AddForm'
import {addingTodo} from "../actions/actions";

const mapStateToProps = (state) => ({
    loading: state.loading
});

const mapDispatchToProps = dispatch => ({
    addingTodo: (todo) => dispatch(addingTodo(todo))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddForm)