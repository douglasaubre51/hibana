import user from '../models/user.model.js'


const signUp = async (req,res) =>{
  // get json payload
  const {
    firstName,
    lastName,
    email,
    password
  } = req.body

  // validate form fields
  if(
    !firstName ||
    !lastName ||
    !email ||
    !password ||
  ){
    return res
      .status(400)
      .json({
	message: 'form validation error!',
	success: false
      })
  }

  // signup user 
  try{
    getUser = user.findOne({ email })

    if(getUser){
      return res
	.status(400)
	.json({
	  message: 'user already exists!',
	  success: false
	})
    }

   
  }
}
