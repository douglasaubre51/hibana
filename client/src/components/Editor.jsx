import styles from '../styles/Editor.module.css'
import {
    PDFDocument,
    PageSizes,
    StandardFonts,
    rgb
} from 'pdf-lib'

async function createPDF() {
    const createPDFBtn = document.getElementById('create-PDF-btn')

    createPDFBtn.addEventListener(
        'click',
        async () => {
            // get text
            let editorCanvas = document.getElementById('editor-canvas')
            let text = editorCanvas.innerText

            console.log(text)

            // init pdf
            const PDF = await PDFDocument.create()
            const fontStyle = await PDF.embedFont(StandardFonts.TimesRomanBold)

            let page = PDF.addPage(PageSizes.A4)
            page.drawText(
                text,
                {
                    x: 50,
                    y: 800,
                    font: fontStyle,
                    size: 10,
                    color: rgb(0, 0, 0)
                }
            )

            const payload = await PDF.save()

            const blob = new Blob(
                [payload]
            )

            // load payload
            const loader = document.createElement('a')
            loader.download = 'pdf-demo.pdf'
            loader.href = URL.createObjectURL(blob)

            // trigger download
            loader.click()
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