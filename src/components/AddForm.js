import React, {Component} from 'react';
import {
    Button,
    Input,
    Form, FormGroup, Label, Col, Jumbotron, Container,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BeatLoader} from "react-spinners";
import Center from 'react-center';


export default class AddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    render() {
        return (
                <Col>
                    <Jumbotron className="insideJum" style={{backgroundColor: 'lavender'}}>
                        <Container>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleText"
                                               style={{color: 'black'}}>
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
                                        this.props.addingTodo(newTodo);
                                        this.setState({value: ''});
                                    }}>Add item</Button>
                                    <br/>
                                </Form>
                        </Container>
                    </Jumbotron>
                    <Center>
                        <BeatLoader color={'mediumPurple'}
                                    loading={this.props.loading} />
                    </Center>
                </Col>
        )
    }
}
