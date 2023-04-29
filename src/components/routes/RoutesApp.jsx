import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { File } from '../file/File'
import { HomePage } from '../homePage/HomePage'

export const RoutesApp = () => {
    const [newFiles, setNewFiles] = useState({
        name: '',
        content: ''
    });
    const [files, setFiles] = useState([]);

    useEffect(() => {
        const savedFiles = JSON.parse(localStorage.getItem('newFile'));
        if (savedFiles) {
            setFiles(savedFiles);
        }
    }, []);

    return (
        <Routes>
            <Route path='/' element={
                <HomePage
                    newFiles={newFiles}
                    setNewFiles={setNewFiles}
                    files={files}
                    setFiles={setFiles}
                />} >
                <Route path='/file/:id' element={<File files={files} />} />
            </Route>
        </Routes>
    )
}
