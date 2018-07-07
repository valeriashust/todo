import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Input,
    Form, FormGroup, Label,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addTodo} from "./actions";

import {connect} from 'react-redux';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <Label for="exampleText"
                               style={{color: 'white', textShadow: "1px 1px 2px black"}}>
                            <h3>Add a new item to your list:</h3></Label>
                        <Input type="textArea" name="text" id="exampleText" onChange={(event) => {
                            this.setState({value: event.target.value});
                        }} value={this.state.value}/>
                    </FormGroup>
                    <br/>
                    <Button color="secondary" onClick={e => {
                        e.preventDefault();
                        if (!this.state.value.trim()) {
                            return
                        }
                        this.props.addTodo(this.state.value);
                        this.setState({value: ''});
                    }}>Add item</Button>
                        <br/>
                        </Form>
                        </div>
                        )}
                    }

                    const mapStateToProps=(state, ownProps) => ({

                });

                    const mapDispatchToProps=dispatch => ({
                    addTodo: text => dispatch(addTodo(text))
                });

AddForm.propTypes = {
    addTodo: PropTypes.func,
};

                    export default connect(mapStateToProps, mapDispatchToProps)(AddForm)