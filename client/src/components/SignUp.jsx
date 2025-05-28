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
        <div className={styles.contentBody}>
          <div className={styles.headerContainer}>
            <span>Create an </span>
            <span>account!</span>
          </div>

          <div className={styles.formContainer}>
            <span>first name</span>
            <input type="text" id="first-name-box" />

            <span>last name</span>
            <input type="text" id="last-name-box" />

            <span>email</span>
            <input type="email" id="email-box" />

            <span>password</span>
            <input type="text" id="password-box" />

            <div id="btn-container">
              <button id="submit-btn" onClick={createAccount}>
                continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
