import styles from './SignUp.module.css'
import SignUpCard from '../components/SignUpCard.jsx'
import { useEffect, useState } from 'react'

// render sign up page!
const SignUp = function () {
    let [color, setColor] = useState('red')
    let [value, setValue] = useState('Pdf')

    useEffect(
        () => {
            const timer = setInterval(
                () => {
                    if (color == 'red') {
                        setColor('grey')
                        setValue('Odt')
                    }

                    else if (color == 'grey') {
                        setColor('blue')
                        setValue('Docx')
                    }

                    else if (color == 'blue') {
                        setColor('red')
                        setValue('Pdf')
                    }

                    console.log('el effecto')
                },
                2000
            )

            return () => clearInterval(timer)
        },
        [color, value]
    )

    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.leftContainer}>
                    <span className={styles.header}>
                        Sign up
                    </span>
                    <span className={styles.header}>
                        to create
                    </span>
                    <span
                        className={styles.header}
                        style={{
                            color: color,
                            transitionDuration: '.10s'
                        }}
                    >
                        {value}
                    </span>
                </div>

                <div className={styles.rightContainer}>
                    <SignUpCard></SignUpCard>
                </div>
            </div>
        </>
    )
}

export default SignUp;