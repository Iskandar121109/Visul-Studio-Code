import React from 'react'
import { Content } from '../aside/Content'
import { Header } from '../header/Header'

export const HomePage = ({ newFiles, setNewFiles, files, setFiles }) => {
    return (
        <div>
            <Header />
            <Content
                newFiles={newFiles}
                setNewFiles={setNewFiles}
                files={files}
                setFiles={setFiles}
            />
        </div>
    )
}
