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
      <div>
        <h1>Create new account!</h1>

        <div id="form-container">
          <h3>first name</h3>
          <input type="text" id="first-name-box" />

          <h3>last name</h3>
          <input type="text" id="last-name-box" />

          <h3>email</h3>
          <input type="email" id="email-box" />

          <h3>password</h3>
          <input type="text" id="password-box" />

          <div id="btn-container">
            <button id="submit-btn" onClick={createAccount}>
              continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
