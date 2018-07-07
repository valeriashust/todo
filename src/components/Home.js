import React, {Component} from "react";
import {
    Container,
    Row,
    Col,
    Jumbotron,
    Label,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisibleTodoList from "../containers/VisibleTodoList";
import AddForm from "../containers/AddForm";

export default class Home extends Component {  //компонент-контейнер

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
                                        <VisibleTodoList/>
                                    </p>
                                </Jumbotron>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
};