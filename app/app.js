import express from "express";
import sequelize  from './db.js'
// import {} from './models/models.js'
import cors  from 'cors'
import fileUpload  from 'express-fileupload'
import router  from './routes/routes.js'
import errorHandler  from './middleware/ErrorHandlingMiddleware.js'
import path  from 'path'
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}


start()