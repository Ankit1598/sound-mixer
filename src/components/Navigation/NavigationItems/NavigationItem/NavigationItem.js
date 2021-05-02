import React from "react"
import { NavLink } from "react-router-dom"
import classes from "./NavigationItem.module.css"

const navigationItem = (props) => {

    let navigationLink = (
        <NavLink
            activeClassName={classes.active}
            exact={props.exact}
            to={props.link} >
            {props.children}
        </NavLink>
    )

    return (
        <li className={classes.NavigationItem}>
            {navigationLink}
        </li>
    )
}

export default navigationItem