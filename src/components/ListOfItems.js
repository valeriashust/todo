import React, {Component} from "react";
import {Item} from "./App"

class ListOfItems extends Component {     //компонент-представлние (список дел)
    render() {
        return (
            <p className="item-list">
                {this.props.items.map((item)=> <Item item = {item}/>)}
            </p>
        );
    }
}

export default ListOfItems;