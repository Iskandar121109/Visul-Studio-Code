import React from 'react'
import classes from './Header.module.css';
import { TbBrandVscode } from "react-icons/tb";
import { VscChromeClose, VscChromeMinimize, VscChromeRestore, VscLayout, VscLayoutPanel, VscLayoutSidebarLeft, VscLayoutSidebarRightOff } from "react-icons/vsc";

export const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.containerLogoTitle}>
                <div className={classes.logo}>
                    <TbBrandVscode className={classes.TbBrandVscode} />
                </div>
                <div className={classes.links}>
                    <ul className={classes.ul}>
                        <li>File</li>
                        <li>Edit</li>
                        <li>Selection</li>
                        <li>View</li>
                        <li>Go</li>
                        <li>Run</li>
                        <li>Terminal</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
            <div className={classes.title}>
                Задача - Visual Studio Code
            </div>
            <div className={classes.containerIconWindowClose}>
                <div className={classes.iconsWindow}>
                    <VscLayoutSidebarLeft />
                    <VscLayoutPanel />
                    <VscLayoutSidebarRightOff />
                    <VscLayout />
                </div>
                <div className={classes.close}>
                    <VscChromeMinimize />
                    <VscChromeRestore />
                    <VscChromeClose />
                </div>
            </div>
        </div>
    )
}
