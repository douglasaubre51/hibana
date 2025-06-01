import styles from '../styles/CreateDocument.module.css'

import { Editor } from '../components/Editor.jsx'


export function CreateDocument() {
    return (
        <>
            <div className={styles.mainContent}>
                <Editor />
            </div>
        </>
    )
}