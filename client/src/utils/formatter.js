export const format = (htmlText, page) => {
    // text to array
    let htmlTextArray = Array.from(htmlText)

    // replace tags with space and newlines
    htmlTextArray.replace('&nbsp;', ' ')
    htmlTextArray.replace(/<div>/, '\n')
    htmlTextArray.replace('</div>/', '\n')
    htmlTextArray.replace(/<br>/, '\n\n')

    // create new char array
    let textArray = []

    cos
}