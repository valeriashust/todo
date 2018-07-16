import React, {Component} from "react";
import {
    InputGroup, InputGroupAddon, InputGroupText, Input, Button, Col, Row,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Item extends Component {

    onChange = () => {
        this.props.toggleTodo(this.props.item.id);
    };

    onClick = () => {
        this.props.deleteTodo(this.props.item.id);
    };

    onChangeInput = (event) => {
        this.props.updateTodo(event.target.value, this.props.item.id);
    };


    render() {
        return (
            <Row style={{marginBottom: '10px'}}>
                <Col>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <Input onChange={this.onChange} addon type="checkbox"
                                       checked={(this.props.item.completed)}/>
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input key={this.props.item.id} value={this.props.item.text}
                               onChange={this.onChangeInput}/>
                    </InputGroup>
                </Col>
                <Col sm={{size: 'auto', offset: 1}}>
                    <Button color="secondary" onClick={this.onClick}>Delete</Button>
                </Col>
            </Row>
        )
    }
}