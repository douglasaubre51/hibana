import styles from '../styles/Editor.module.css'


export function Editor() {
    return (
        <>
            <div className={styles.container}>
                <div
                    contentEditable='true'
                    spellCheck="true"
                    className={styles.editorCanvas}
                >
                </div>
            </div>
        </>
    )
}