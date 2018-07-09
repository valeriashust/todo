import React from 'react'
import PropTypes from 'prop-types'
import {DropdownItem} from "reactstrap";

const Link = ({ active, children, onClick }) => (
    <DropdownItem onClick={onClick} disabled={active}>{children}</DropdownItem>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link