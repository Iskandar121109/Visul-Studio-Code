import React, { useState } from 'react';
import { VscChevronRight, VscCollapseAll, VscEllipsis, VscNewFile, VscNewFolder, VscRefresh } from 'react-icons/vsc';
import classes from './LeftNavbar.module.css';

export const Explorer = ({ setNewFiles, newFiles, files, setFiles }) => {
    const [newFileOpen, setNewFileOpen] = useState(false);
    const saveFile = () => {
        const updateFiles = [...files, { id: crypto.randomUUID(), ...newFiles }]
        setFiles(updateFiles)
        setNewFiles({
            name: '',
            content: ''
        });
        localStorage.setItem('newFile', JSON.stringify(updateFiles));
    };
    const showOpenAndHideTextArea = () => {
        setNewFileOpen(!newFileOpen);
    }
    return (
        <div className={classes.explorer}>
            <div className={classes.titleExplorer}>
                EXPLORER
                <VscEllipsis className={classes.VscEllipsisExplorer} />
            </div>
            <div className={classes.taskExplorer}>
                <h4>
                    <VscChevronRight className={classes.VscChevronRightExp} />
                    ЗАДАЧА VS CODE
                    <div className={classes.expOpenIcons}>
                        <VscNewFile onClick={showOpenAndHideTextArea} />
                        <VscNewFolder />
                        <VscRefresh />
                        <VscCollapseAll />
                    </div>
                </h4>
            </div>
            <div>
                {newFileOpen && <div className={classes.newFileInputNameAdd}>
                    <input
                        className={classes.inputName}
                        type="text" placeholder='Имя файла'
                        onChange={(e) => setNewFiles({ ...newFiles, name: e.target.value })}
                        value={newFiles.name} />
                    <button onClick={saveFile}>Add</button>
                </div>}
                <div className={classes.VscChevronBottom}>
                    {files.length > 0 && files.map(file => (
                        <div key={file.id} className={classes.nameToOpenFile}>
                            <p>{file.name && <VscChevronRight />}{file.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};
