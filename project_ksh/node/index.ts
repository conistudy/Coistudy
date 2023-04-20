import express, { Express, Router, Request, Response } from 'express'
import axios from 'axios'
const app: Express = express()
app.use('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
const router: Router = express.Router()

app.use('/api', router)
let cateGoryData = require('./data/list.json');

router.get('/list', async (req: Request, res: Response) => {
    // const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')
    // const result = await axios.post('https://c.m.163.com/ug/api/wuhan/app/data/list-total?t=336123154589')
   
    res.json({
        ...cateGoryData.data
    })
})

app.listen(3333,()=>{

    console.log('success server http://localhost:3333')
})