import React, {Component} from 'react';
import {
    Button,
    Input,
    Form, FormGroup, Label, Col, Jumbotron, Container,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addTodo} from "../actions/actions";
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
                <Col>
                    <Jumbotron className="insideJum" style={{backgroundColor: 'mediumPurple'}}>
                        <Container>
                            <p>
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
                                        this.props.dispatch(addTodo(this.state.value));
                                        this.setState({value: ''});
                                    }}>Add item</Button>
                                    <br/>
                                </Form>
                            </p>
                        </Container>
                    </Jumbotron>
                </Col>
            </div>
        )
    }
}


export default connect()(AddForm)