import styles from './SignInCard.module.css'

// signin logic
function signIn() {
    console.log('signing in...')
}

// render signincard
const SignInCard = () => {

    return (
        <>
            <div className={styles.mainContent}>
                <div className={styles.headerContainer}>
                    <span>
                        Sign in
                    </span>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <span>
                            email
                        </span>
                        <input type='text' id='email-box' />
                    </div>
                    <div className={styles.formGroup}>
                        <span>
                            password
                        </span>
                        <input type='password' id='password-box' />
                    </div>
                    <div className={styles.btnContainer}>
                        <button onClick={signIn}>
                            continue
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInCard