import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const File = ({ files }) => {
    const { id } = useParams();
    const [incomingfile, setIncomingFile] = useState({});

    useEffect(() => {
        setIncomingFile(files.find(file => file.id === id))
    }, [id])
    
    return (
        <div style={{ fontSize: '1.5rem', color: '#fff', padding: '10px 0 10px 0' }}>
            {incomingfile && incomingfile.content}
        </div>
    )
}
