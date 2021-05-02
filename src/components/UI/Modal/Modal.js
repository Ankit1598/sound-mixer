import React from "react"
import Wrapper from "../../../hoc/Wrapper"
import Backdrop from "../../UI/Backdrop/Backdrop"
import classes from "./Modal.css"

const modal = (props) => {
    return (
        <Wrapper>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={
                    {
                        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
                        opacity: props.show ? "1" : "0"
                    }
                } >
                {props.children}
            </div>
        </Wrapper>
    )
}

export default modal