import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { LeftNavbar } from './LeftNavbar';
import classes from './LeftNavbar.module.css'
import { TitleContent } from './TitleContent';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Content = ({ newFiles, setNewFiles, files, setFiles }) => {
    const [hideTextArea, setHideTextArea] = useState(false);
    const { id } = useParams();
    const codeText = files.find(file => file.id === id);

    return (
        <div>
            <div className={classes.titleContentDiv} onClick={() => setHideTextArea(!hideTextArea)}>
                {
                    files.length > 0 && files.map((file) => (
                        <div key={file.id}>
                            <TitleContent
                                files={files}
                                setFiles={setFiles}
                                file={file}
                            />
                        </div>))
                }
            </div>

            <div className={classes.content}>
                <LeftNavbar
                    newFiles={newFiles}
                    setNewFiles={setNewFiles}
                    setFiles={setFiles}
                    files={files}
                />
                <div className={classes.contentEdit}>
                    {
                        !hideTextArea ?
                            (<textarea
                                value={newFiles.content}
                                onChange={(e) => setNewFiles({ ...newFiles, content: e.target.value })}
                            />) :
                            (<SyntaxHighlighter className={classes.highLighter} language="javascript" style={docco}>
                                {codeText && codeText.content}
                            </SyntaxHighlighter>)
                    }
                </div>
            </div>
        </div>

    )
}
