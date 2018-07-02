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
import {AddForm} from './AddForm';



class App extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    addItem() {
        ReactDOM.render(<AddForm />, document.getElementById('container'));
    }
    
    render() {
        return (
            <div>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand href="/">Your list</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="">Add Item</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Jumbotron>
                    <Container id="container">
                        <Row>
                            <Col>
                                <h1>To do:</h1>
                                <br/>
                                <p>
                                   <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                                          </InputGroupText>
                                        </InputGroupAddon>
                                        <Input value="Wash the dishes" />
                                      </InputGroup>
                                </p>
                                <br/>
                                <Button color="success" onClick={this.addItem} >Add item</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default App;