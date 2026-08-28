import express from 'express'
import cors from 'cors'
import { clerkMiddleware, getAuth } from '@clerk/express';

const app = express()
app.use(cors())

app.use(clerkMiddleware());
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})