import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
    InputGroup, InputGroupAddon, InputGroupText, Input,
    Form, FormGroup, Label, FormText,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'immutable';

class AddForm extends Component {
   constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
   render () { 
    return(               
        <Row>
            <Col>                
                <p>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText"><h3>Add a new item to your list:</h3></Label>
                            <Input type="textarea" name="text" id="exampleText" onChange={this.handleChange} value = {this.state.value} />
                         </FormGroup>
                    </Form>  
                </p>
                <br/>
                <Button color="success" onClick={this.addItemToList} >Add item</Button>
            </Col>
        </Row>
     
    )}

    handleChange(event) {
        this.setState({value: event.target.value});
    };

    addItemToList() {
        alert('A name was submitted: ' + this.state.value);

    };
}

export {AddForm};