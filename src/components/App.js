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
import {Route, Switch, Link} from 'react-router-dom';
import AddForm from '../containers/AddForm'

import VisibleTodoList from '../containers/VisibleTodoList'
import { addTodo } from '../actions/actions'


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
}


export class Item extends Component {
    render() {
    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText>
                    <Input addon type="checkbox"
                           aria-label="Checkbox for following text input"/>
                </InputGroupText>
            </InputGroupAddon>
            <Input  defaultValue={this.props.item.text}/>
        </InputGroup>
    );}
}



class Home extends Component {  //компонент-контейнер

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
                                           <AddForm/>
                                        </p>
                                    </Container>
                                </Jumbotron>
                            </Col>
                            <Col>
                                <Jumbotron style={{backgroundColor: 'lightGrey'}}>
                                    <Label for='list'><h3>To Do:</h3></Label>
                                    <p>
                                        <VisibleTodoList />
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

class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;


