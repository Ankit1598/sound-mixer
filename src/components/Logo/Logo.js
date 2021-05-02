import React from "react"
import companyLogo from "../../assets/logo.png"
import classes from "./Logo.module.css"

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img style={{ height: props.height }} src={companyLogo} alt="logo" />
            <h1>{props.children}</h1>
        </div>
    )
}

export default logo