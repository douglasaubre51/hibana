import express from 'express'
import mongoose from 'mongoose'

const app = express()

const port = 3000

const atlasURI = 'mongodb+srv://allen:chancellor66@neliel.ptcuka3.mongodb.net/?retryWrites=true&w=majority&appName=Neliel'

// start express server
app.listen(
  port,
  ()=>{
    console.log(`http://localhost:${port}/`)
  }
)

// json middleware
express.json()

// connect to neliel (atlas db)
mongoose
  .connect(atlasURI)
  .then(()=>{
    console.log(`connected to Neliel cluster!(atlas db),\nstate: ${mongoose.connection.readyState}`)
  })
  .catch(()=>{
    console.log('error connecting to Neliel cluster!(atlas db)')
  })

// send a get request!
app.get(
  '/',
  (req,res)=>{
    res.send(
      '<h1>Hello and welcome to MERN!</h1>'
    )
  }
)
