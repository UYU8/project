const Koa = require('koa')
const cors = require('@koa/cors')
const app = new Koa()
const { bodyParser } = require('@koa/bodyparser')
const useRouter = require('./routes/index')


// const userRouter = require('./routes/user')


app.use(cors())//允许跨域，且先允许跨域再进行路由
app.use(bodyParser())//让koa可以解析post请求
// app.use(userRouter.routes())
// app.use(userRouter.allowedMethods())
useRouter(app)


app.listen(3000, () => {
  console.log('项目已启动')
})
