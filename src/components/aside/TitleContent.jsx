import React from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import classes from './LeftNavbar.module.css'

export const TitleContent = ({ file, files, setFiles }) => {
    const deleteFile = (id) => {
        const deleteFiles = files.filter(file => file.id !== id)
        setFiles(deleteFiles);
        localStorage.setItem('newFile', JSON.stringify(deleteFiles));
    }
    return (
        <div className={classes.titleContent}>
            <Link className={classes.titleLink} to={`/file/${file.id}`}>{file.name} {<VscChromeClose onClick={() => deleteFile(file.id)} className={classes.VscChromeCloseTitle} />}</Link>
        </div>
    )
}
