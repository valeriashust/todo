import React, {Component} from 'react';
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
    Form, FormGroup, Label,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'immutable';
import {Route, Switch, Link} from 'react-router-dom';
import {} from 'react-redux';
import {createStore, combineReducers} from 'redux';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            {/*<Route path='/add' component={AddForm}/>*/}
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

class ListOfItems extends Component {     //компонент-представлние (список дел)
    constructor(props) {
        super(props);
    }

    createListItem = (item) => {
        return (
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input addon type="checkbox"
                               aria-label="Checkbox for following text input"/>
                    </InputGroupText>
                </InputGroupAddon>
                <Input key = {item.id} onChange={this.props.handleChange} defaultValue={item.value}/>
            </InputGroup>
        );
    };

    render() {
        return (
            <p className="item-list">
                {this.props.items.map(this.createListItem)}
            </p>
        );
    }
}

class Home extends Component {  //компонент-контейнер
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: [],
            id: 0,
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleChangeItems = (event) => {
        this.setState({value: event.target.value});
        let newState = Object.assign({}, this.state);
        //let item = newState.items.find((item) => {if(item.id===itemId){return item}});
        this.setState(newState);
    };


    addItemToList = () => {

        let newState = Object.assign({}, this.state);
        let item = {value: this.state.value, id: this.state.id};
        newState.items.push(item);
        newState.value = '';
        newState.id++;
        this.setState(newState);


    };

    render() {
        return (
            <div>

                <Jumbotron>
                    <Container id="container">
                        <Row>
                            <Col>
                                <Jumbotron className="insideJum" style={{backgroundColor: 'mediumPurple'}}>
                                    <Container>
                                        <p>
                                            <Form>
                                                <FormGroup>
                                                    <Label for="exampleText"
                                                           style={{color: 'white', textShadow: "1px 1px 2px black"}}>
                                                        <h3>Add a new item to your list:</h3></Label>
                                                    <Input type="textArea" name="text" id="exampleText"
                                                           onChange={this.handleChange} value={this.state.value}/>
                                                </FormGroup>
                                            </Form>
                                        </p>
                                        <br/>
                                        <Button color="secondary" onClick={this.addItemToList}>Add item</Button>
                                        <br/>
                                    </Container>
                                </Jumbotron>


                            </Col>
                            <Col>
                                <Jumbotron style={{backgroundColor: 'lightGrey'}}>
                                    <Label for='list'><h3>To Do:</h3></Label>
                                    <p>
                                        <ListOfItems id="list" items={this.state.items}
                                                     handleChange={this.handleChangeItems}/>
                                    </p>
                                </Jumbotron>
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

