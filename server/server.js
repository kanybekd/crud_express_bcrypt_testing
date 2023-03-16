const express = require("express")
const signUpTemplate = require("./models/SignUpModels")
const app = express()
const hashing = require("bcrypt")


const mongoose = require("mongoose")
const routerUrls = require("./routes/routes")
const dotenv = require("dotenv")
const bodyParser = require("body-parser");
const cors = require("cors")

// connection with MongoDB
dotenv.config()
mongoose.connect(process.env.db, () => console.log("dataBase connected"))

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use(express.json());
app.use(express.urlencoded());
//Show all data from mongoDB
app.get('/showAll', async (req, res) => {
    try {
        const data = await signUpTemplate.find();
        res.json(data)
    }
    catch (err) {
        res.json({ error: err })
    }
})

// Create  new user
app.post("/register", (request, response) => {

    hashing
        .hash(request.body.password, 10)
        .then((afterSalting) => {
            const signUpUser = new signUpTemplate({
                fullname: request.body.fullname,
                username: request.body.username,
                email: request.body.email,
                password: afterSalting,

            })
            signUpUser.save()
                .then((result) => {
                    response.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                .catch(err => console.log("not saved", err))
        })
})

app.delete("/remove/:id", async (req, res) => {
    try {
        // console.log(req.body.id, "<<<<<<")
        const removed = await signUpTemplate.remove({ _id: req.params.id })
        res.json(removed)
    }
    catch (err) {
        res.json({ err: err.errors })
    }
})
// app.put('/update/:id', async (req, res) => {
//     try {

//         const updateValues = new signUpTemplate({
//             fullname: req.body.fullname,
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password,
//             // id: req.body.id
//         })
//         console.log(updateValues)
//         const afterUpdating = await signUpTemplate.updateOne({ _id: "641260d4fc1ba6528efa107b" }, updateValues)
//         res.json(afterUpdating)
//     } catch (err) {
//         console.log(err)
//     }
// })

app.put('/update/:id', (req, res) => {

    signUpTemplate.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        email: req.body.email,
        fullname: req.body.fullname
    }, { new: true }, (err, data) => {

        if (!err) {
            res.status(200).json({ code: 200, message: "std updated successfully", updateEmployee: data })
        } else {
            res.status(400).json({ code: 400, message: "std updated failed." })
        }
    })
})



const PORT = 3001

app.listen(PORT, () => {
    console.log("server is runnning successfully! listening to port#", PORT)
})