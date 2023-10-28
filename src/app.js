import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/index-routes.js'


const app = express()
app.use(express.json())
app.use(cors())
app.get("/health", (req, res)=>{
res.send("IM ok")
})
app.use(router)

dotenv.config()



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))