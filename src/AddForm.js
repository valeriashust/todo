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
    }
   render () { 
    return(               
        <Row>
            <Col>                
                <p>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText"><h3>Add a new item to your list:</h3></Label>
                            <Input type="textarea" name="text" id="exampleText" onChange={(e) => this.onChange(`${e.target.value}`)} />
                         </FormGroup>
                    </Form>  
                </p>
                <br/>
                <Button color="success" onClick={this.addItemToList} >Add item</Button>{' '}
            </Col>
        </Row>
     
    )}

    onChange(value) {
        

    };

    addItemToList() {
        alert(Input.value);

    };
}

export {AddForm};