import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {gettingAllTodos} from "../actions/actions";
import {connect} from "react-redux";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.props.dispatch(gettingAllTodos());
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
                    <Link to="/" style={{color: 'mediumPurple', fontSize: '24px'}}>Your List</Link>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/add" style={{color: 'mediumPurple', fontSize: '24px'}}>Add Item</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        )
    }
};
export default connect()(Header)