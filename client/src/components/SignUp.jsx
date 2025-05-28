import styles from "./SignUp.module.css";

// sign up logic
function createAccount() {
  console.log("clicked submit!");

  let firstName = document.getElementById("first-name-box").value;
  let lastName = document.getElementById("last-name-box").value;
  let email = document.getElementById("email-box").value;
  let password = document.getElementById("password-box").value;

  console.log(firstName);

  if (firstName != "" && lastName != "" && email != "" && password != "") {
    fetch("http://localhost:3000/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.firstName);
        // success
        if (data.status == 201) console.log(data.message);
        else console.log(data.message);
      })
      .catch((err) => console.log("error creating account!", err.message));
  }
}

// render sign up card
function SignUp() {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.formContainer}>

          <div className={styles.formGroup}>
            <span>First name</span>
            <input type="text" id="first-name-box" />
          </div>

          <div className={styles.formGroup}>
            <span>Last name</span>
            <input type="text" id="last-name-box" />
          </div>

          <div className={styles.formGroup}>
            <span>Email Id</span>
            <input type="email" id="email-box" />
          </div>

          <div className={styles.formGroup}>
            <span>Password</span>
            <input type="password" id="password-box" />
          </div>

          <div className={styles.btnContainer}>
            <button className={styles.submitBtn} onClick={createAccount}>
              continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
