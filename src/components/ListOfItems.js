import React, {Component} from "react";
import Item from "../components/Item"

export default class ListOfItems extends Component {     //компонент-представлние (список дел)

    render() {
        return (
            <p className="item-list">
                {this.props.items.map((item)=> <Item item = {item}/>)}
            </p>
        );
    }
};