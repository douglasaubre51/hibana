import styles from '../styles/SignInCard.module.css'


// signin logic
function signIn() {
    console.log('signing in...')

    const email = document.getElementById('email-box').value
    const password = document.getElementById('password-box').value

    if (email != '' && password != '') {
        fetch(
            "http://localhost:3000/sign-in",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
            .then(async (res) => {
                const data = await res.json()
                console.log(res.status)
                console.log(data.message)

                let invalidEmail = document.getElementById('invalid-email')
                let invalidPassword = document.getElementById('invalid-password')
                invalidEmail.textContent = ''
                invalidPassword.textContent = ''

                if (data.code == 1) {
                    invalidEmail.textContent = "  doesn't exist!"
                }
                if (data.code == 2) {
                    invalidPassword.textContent = "  doesn't exist!"
                }
            })
    }
}

// render signincard
const SignInCard = () => {

    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.container}>
                    <div className={styles.headerContainer}>
                        <span>
                            Sign in
                        </span>
                    </div>
                    <div className={styles.formContainer}>
                        <div className={styles.formGroup}>
                            <div className={styles.formTagGroup}>
                                <span>
                                    email
                                </span>
                                <span
                                    className={styles.errorMessage}
                                    id='invalid-email'
                                >
                                </span>
                            </div>
                            <input type='text' id='email-box' />
                        </div>
                        <div className={styles.formGroup}>
                            <div className={styles.formTagGroup}>
                                <span>
                                    password
                                </span>
                                <span
                                    className={styles.errorMessage}
                                    id='invalid-password'
                                >
                                </span>
                            </div>
                            <input type='password' id='password-box' />
                        </div>
                        <div className={styles.btnContainer}>
                            <button onClick={signIn}>
                                continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInCard