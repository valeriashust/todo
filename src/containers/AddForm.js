import React, {Component} from 'react';
import {
    Button,
    Input,
    Form, FormGroup, Label, Col, Jumbotron, Container,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addingTodo} from "../actions/actions";
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
                <Col>
                    <Jumbotron className="insideJum" style={{backgroundColor: 'mediumPurple'}}>
                        <Container>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleText"
                                               style={{color: 'white', textShadow: "1px 1px 2px black"}}>
                                            <h3>Add a new item to your list:</h3></Label>
                                        <Input type="textArea" name="text" id="exampleText" onChange={(event) => {
                                            this.setState({value: event.target.value})
                                        }} value={this.state.value}/>
                                    </FormGroup>
                                    <br/>
                                    <Button color="secondary" onClick={e => {
                                        e.preventDefault();
                                        if (!this.state.value.trim()) {
                                            return
                                        }
                                        let newTodo = {text: this.state.value, completed: false};
                                        this.props.dispatch(addingTodo(newTodo));
                                        this.setState({value: ''});
                                    }}>Add item</Button>
                                    <br/>
                                </Form>
                        </Container>
                    </Jumbotron>
                </Col>
        )
    }
}


export default connect()(AddForm)