import React, {Component} from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions/actions'
import {ButtonDropdown, DropdownMenu, DropdownToggle} from "reactstrap";

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret size="sm">
                    Visibility
                </DropdownToggle>
                <DropdownMenu>
                    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                        All
                    </FilterLink>
                    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                        Active
                    </FilterLink>
                    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                        Completed
                    </FilterLink>
                </DropdownMenu>
            </ButtonDropdown>
        )
    }
};
