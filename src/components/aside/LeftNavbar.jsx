import React, { useState } from 'react'
import { VscAccount, VscDebugAlt, VscExtensions, VscFiles, VscGear, VscSearch, VscSourceControl } from 'react-icons/vsc';
import { Explorer } from './Explorer';
import { Search } from './Search';
import classes from './LeftNavbar.module.css';

export const LeftNavbar = ({ newFiles, setNewFiles, files, setFiles}) => {
    const [active, setActive] = useState({
        explorer: false,
        search: false,
        sourse: false,
        runDebug: false,
        extensions: false,
        account: false,
        gear: false
    });
    return (
        <div className={classes.containerLeftNavbar}>
            <div className={classes.leftNavbar}>
                <div className={classes.topIcons}>
                    <VscFiles
                        onClick={() => setActive(!active.explorer ? { ...active, explorer: true }
                            : { ...active, explorer: false })}
                        className={!active.explorer ? classes.VscFiles : classes.active} />
                    <VscSearch
                        onClick={() => setActive(!active.search ? { ...active, search: true }
                            : { ...active, search: false })}
                        className={!active.search ? classes.VscSearch : classes.active} />
                    <VscSourceControl
                        onClick={() => setActive(!active.sourse ? { ...active, sourse: true } :
                            { ...active, sourse: false })}
                        className={!active.sourse ? classes.VscSourceControl : classes.active} />
                    <VscDebugAlt
                        onClick={() => setActive(!active.runDebug ? { ...active, runDebug: true }
                            : { ...active, runDebug: false })}
                        className={!active.runDebug ? classes.VscDebugAlt : classes.active} />
                    <VscExtensions onClick={() => setActive(!active.extensions ? { ...active, extensions: true }
                        : { ...active, extensions: false })}
                        className={!active.extensions ? classes.VscExtensions : classes.active} />
                </div>
                <div className={classes.bottomIcons}>
                    <VscAccount
                        onClick={() => setActive(!active.account ? { ...active, account: true }
                            : { ...active, account: false })}
                        className={!active.account ? classes.VscAccount : classes.active} />
                    <VscGear
                        onClick={() => setActive(!active.gear ? { ...active, gear: true }
                            : { ...active, gear: false })}
                        className={!active.gear ? classes.VscGear : classes.active} />
                </div>
            </div>
            {<Explorer
                classNam={classes.explorer}
                newFiles={newFiles}
                setNewFiles={setNewFiles}
                files={files}
                setFiles={setFiles}
            />}
            {active.search && <Search />}
        </div>
    )
}