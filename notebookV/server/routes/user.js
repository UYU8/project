const router = require('@koa/router')()
const { userLogin,userFind,userRegister } = require('../controllers/index')
const jwt = require('../utils/jwt')

router.prefix('/user')
router.post('/login', async(ctx) => {
    // ctx.body = 'login'
    // 从请求体中解析到前端传递的参数，去数据库查询是否存在该用户，账号密码是否合法
    // console.log(ctx.request.body);
    const { username, password } = ctx.request.body
    try{
    const result = await userLogin(username, password)
    console.log(result);
    if(result.length > 0){//找到了
        const data = {
            id: result[0].id,
            nickname: result[0].nickname,
            username: result[0].username,
        }
        //生成token
        const token = jwt.sign(data)
        // console.log(token);
        ctx.body = {
            code: 800,
            data: data,
            msg: '登录成功',
            token
        }
    }else{//没找到
        ctx.body = {
            code: 801,
            msg: '用户名或密码错误',
            data: 'error'
        }
    }
    }catch(err){
        ctx.body = {
            code: 802,
            data: err,
            msg: '服务器异常'
        }
    }
})

router.post('/register', async(ctx) => {
    const { username, password,nickname } = ctx.request.body
    if(!username || !password || !nickname){
        ctx.body = {
            code: 803,
            msg: '用户名、密码、昵称不能为空',
            data: 'error'
        }
    }
    // 判断账号是否存在
    const findRes = await userFind(username)
    if(findRes.length > 0){//账号存在
        ctx.body = {
            code: 806,
            msg: '账号已存在',
            data: 'error'
        }
        return
    }
    // 往数据库添加用户
    const res = await userRegister(username, password,nickname)
    console.log(res);
    if(res.affectedRows > 0){//添加成功(affectedRows:影响的行数)
        ctx.body = {
            code: 800,
            msg: '注册成功',
            data: 'success'
            
        }
    }else{//添加失败
        ctx.body = {
            code: 802,
            msg: '注册失败',
            data: 'error'
        }
    }
    // try{

    // }
    // catch(err){
    //     ctx.body = {
    //         code: 805,
    //         data: err,
    //         msg: '服务器异常'
    //     }
    // }


})

module.exports = router