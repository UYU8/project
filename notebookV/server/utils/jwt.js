var jwt = require('jsonwebtoken');

function sign(option) {
    return jwt.sign(option,'666',{
        expiresIn: 86400//token的有效时长
    })
}

function verify() {
    return async(ctx,next) => {
        const jwtToken = ctx.req.headers.authorization
        if (jwtToken) {
            try {
                const decoded = jwt.verify(jwtToken,'666')
                if (decoded.id) {
                    ctx.userId = decoded.id
                    ctx.nickname = decoded.nickname
                    await next()
                }
            } catch (error) {
                ctx.body = {
                    code: 811,
                    data: error,
                    msg: 'token过期'
                }
            }
            
            // console.log(decoded);
        }else{
            ctx.body = {
                code: 812,
                data: null,
                msg: 'token不存在'
            }
        }
    }
}
module.exports={
    sign,
    verify
}