import React from "react"
import Button from '@material-ui/core/Button'
import classes from "./Button.module.css"

const button = (props) => {
    return (
        <div className={classes.Button}>
            <Button
                style={{ "height": "65px" }}
                disabled={props.disabled}
                onClick={props.clicked}
                color={props.color}
                variant={props.variant} >
                {props.children}
            </Button>
        </div>
    )
}

export default button