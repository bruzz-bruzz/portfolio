import retrieveAtcoderData from './functions/AtCoder'
import retrieveCodechefData from './functions/CodeChef'
import retrieveCodeforcesData from './functions/Codeforces'
import retrieveLeetcodeData from './functions/LeetCode'
import getRepos from './functions/Github'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
type responseType = {
    data:any,
    ok:boolean,
    msg:string
}
dotenv.config()
const app = express()
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true, // send rate limit headers in the response
    legacyHeaders: false, // send rate limit headers in the response
})
app.use(express.json())
app.use(rateLimiter)
app.use(helmet())
app.use(cors({
    origin:process.env.ORIGIN
}))
app.get('/getCPProfiles',async(req:express.Request,res:express.Response)=>{
    const atcoder = await retrieveAtcoderData(process.env.ATCODER as string)
    const codechef = await retrieveCodechefData(process.env.CODECHEF as string)
    const codeforces = await retrieveCodeforcesData(process.env.CODEFORCES as string)
    const leetcode = await retrieveLeetcodeData(process.env.LEETCODE as string)
    const response:responseType = {
        data:{
            atcoder,
            codechef,
            codeforces,
            leetcode,
        },
        ok:true,
        msg:"Data fetched successfully"
    }
    return res.status(200).json(response)
})
app.get('/getRepos',async(req:express.Request,res:express.Response)=>{
    const repos = await getRepos(process.env.GITHUB as string,process.env.GITHUB_AUTH as string)
    const response:responseType = {
        data:{
            repos,
        },
        ok:true,
        msg:"Data fetched successfully"
    }
    return res.status(200).json(response)
})
app.listen(3000,()=>{
    console.log("Server on port 3000")
})