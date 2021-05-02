import React from "react"
import Wrapper from "../../../hoc/Wrapper"
import Backdrop from "../../UI/Backdrop/Backdrop"
import NavigationItems from "../NavigationItems/NavigationItems"
import classes from "./SideDrawer.module.css"

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Wrapper>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                <nav>
                    <NavigationItems />
                </nav>

            </div>
        </Wrapper>

    )
}

export default sideDrawer