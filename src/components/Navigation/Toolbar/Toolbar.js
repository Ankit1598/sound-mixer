import React from "react"
import Logo from "../../Logo/Logo"
import NavigationItems from "../NavigationItems/NavigationItems.js"
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"
import classes from "./Toolbar.module.css"

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Logo>Sound Mixer</Logo>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>

    )
}

export default toolbar