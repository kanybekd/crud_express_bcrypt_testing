// const express = require("express")
// const router = express.Router()
// const signUpTemplate = require("../models/SignUpModels")


// router.post("/register", (request, response) => {
//     const signUpUser = new signUpTemplate({
//         fullname: request.body.fullname,
//         username: request.body.username,
//         email: request.body.email,
//         password: request.body.password,

//     })
//     signUpUser.save()
//         .then((result) => {
//             response.status(201).send({
//                 message: "User Created Successfully",
//                 result,
//             });
//         })
//         .catch(err => console.log("not saved", err))

// })

// router.get('/showAll', async (req, res) => {
//     try {
//         const data = await signUpTemplate.find();
//         res.json(data)
//     }
//     catch (err) {
//         res.json({ error: err })
//     }
// })




// module.exports = router