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
import Footer from "./Footer";
import {BeatLoader} from 'react-spinners';
import Center from 'react-center';


export default class Home extends Component {  //компонент-контейнер


    render() {
        return (
            <div>
                <Jumbotron>
                    <Container id="container">
                        <Row>
                            <Col>
                            </Col>
                            <Col sm={{size: 'auto', offset: 1}}>
                                <Footer/>
                            </Col>

                        </Row>
                        <br/>
                        <Row>
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
                <Center>
                <BeatLoader color={'mediumPurple'}
                            loading={this.props.loading} />
                </Center>
            </div>
        )
    }
};