import React, {Component} from "react";
import Item from '../components/Item'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class ListOfItems extends Component {     //компонент-представлние (список дел)

    render() {
        return (
            <p className="item-list">
                {this.props.todos.map((item) => {
                        return (
                            <Item item={item} toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo}
                                  updateTodo={this.props.updateTodo}/>
                        )
                    }
                )
                }
            </p>
        );
    }
};