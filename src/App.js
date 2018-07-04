import React, {Component} from 'react';
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
import {Route, Switch, Link} from 'react-router-dom'


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/add' component={AddForm}/>
        </Switch>
    </main>
);

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <header>
                <Navbar color="inverse" light expand="md">
                    <NavbarBrand><Link to="/" className='link' activeClassName="active" onlyActiveOnIndex={true}>Your
                        List</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><Link to="/add" className='link' activeClassName="active">Add
                                    Item</Link></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>)
    }
};

class Home extends Component {
    render() {
        return (
            <div>
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
                                                <Input addon type="checkbox"
                                                       aria-label="Checkbox for following text input"/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                       <Input value="Wash the dishes"/>
                                    </InputGroup>
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    addItemToList = () => {
        alert('A name was submitted: ' + this.state.value);

    };

    render() {
        return (
            <div>

                <Jumbotron>
                    <Container id="container">
                        <Row>
                            <Col>
                                <p>
                                    <Form>
                                        <FormGroup>
                                            <Label for="exampleText"><h3>Add a new item to your list:</h3></Label>
                                            <Input type="textArea" name="text" id="exampleText"
                                                   onChange={this.handleChange} value={this.state.value}/>
                                        </FormGroup>
                                    </Form>
                                </p>
                                <br/>
                                <Button color="success" onClick={this.addItemToList}>Add item</Button>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>

        )
    }


}

export default class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

