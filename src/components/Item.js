import React, {Component} from "react";
import {
    InputGroup, InputGroupAddon, InputGroupText, Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Item extends Component {

    render() {
        return (
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input addon type="checkbox"
                               aria-label="Checkbox for following text input"/>
                    </InputGroupText>
                </InputGroupAddon>
                <Input defaultValue={this.props.item.text}/>
            </InputGroup>
        );
    }
};