import styles from '../styles/Editor.module.css'
import { format } from '../utils/formatter.js'

import {
    PDFDocument,
    PageSizes,
    StandardFonts,
    rgb
} from 'pdf-lib'


function createPDF() {
    const createPDFBtn = document.getElementById('create-PDF-btn')

    createPDFBtn.addEventListener(
        'click',
        async () => {
            // get text and filename
            let fileName = document.getElementById('name-box').value
            let editorCanvas = document.getElementById('editor-canvas')
            let text = editorCanvas.innerHTML
            console.log(text)

            // init pdf
            const PDF = await PDFDocument.create()
            const fontStyle = await PDF.embedFont(StandardFonts.TimesRomanBold)
            let page = PDF.addPage(PageSizes.A4)

            // call hibana's formatter
            format(text, page)

            // save pdf and create payload
            const payload = await PDF.save()
            const blob = new Blob(
                [payload]
            )

            // load payload
            const loader = document.createElement('a')
            loader.download = fileName + '.pdf'
            loader.href = URL.createObjectURL(blob)

            // trigger download
            loader.click()

            // reset loader
            loader.remove()
        }
    )
}

export function Editor() {

    return (
        <>
            <button
                id='create-PDF-btn'
                onClick={createPDF}
            >
                create PDF
            </button>

            <input
                type='text'
                id='name-box'
            />

            <div className={styles.container}>
                <div
                    id='editor-canvas'
                    contentEditable='true'
                    spellCheck="true"
                    className={styles.editorCanvas}
                >
                </div>
            </div>
        </>
    )
}