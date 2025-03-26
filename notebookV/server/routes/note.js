const router = require('@koa/router')()
const jwt = require('../utils/jwt')
const { findNoteListByType, findNoteDetail,notePublish } = require('../controllers/index')
const { formateTime } = require('../utils/formateTime')

router.get('/findNoteListByType',jwt.verify(),async (ctx,next) => {
    // 先检验Token合理再去数据库查找数据
    const { note_type } = ctx.request.query
    // console.log(res);
    try{
        const res = await findNoteListByType(note_type,ctx.userId)
        if(res.length){
            ctx.body = {
                code:800,
                data:res,
                msg:'查询成功'
            }
        }else{
            ctx.body = {
                code:813,
                data:null,
                msg:'查询失败'
            }
        }
    }catch(error){
        ctx.body = {
            code:814,
            data:error,
            msg:'服务器异常'
        }
    } 
})

router.get('/findNoteDetail',jwt.verify(),async (ctx,next) => {
    // 先检验Token合理再去数据库查找数据
    const { id } = ctx.request.query
    try{
        const res = await findNoteDetail(id)
        if(res.length){
            ctx.body = {
                code:800,
                data:res,
                msg:'查询成功'
            }
        }else{
            ctx.body = {
                code:813,
                data:null,
                msg:'查询失败'
            }
        }
    }catch(error){
        ctx.body = {
            code:814,
            data:error,
            msg:'服务器异常'
        }
    }
})
router.post('/note-publish',jwt.verify(), async(ctx) => {
    const { title,note_content,note_type,head_img } = ctx.request.body
    const c_time = formateTime(new Date())
    const m_time = formateTime(new Date())
    if(!title || !note_type){
        ctx.body = {
            code: 803,
            msg: '笔记标题或者笔记类型不能为空呢！',
            data: 'error'
        }
    }else{
        // 往数据库添加用户
        try{
            const res = await notePublish({
                title, 
                note_type, 
                note_content, 
                head_img, 
                c_time, 
                m_time, 
                userId:ctx.userId, 
                nickname:ctx.nickname
            })

            // console.log(res);
            if(res.affectedRows > 0){//添加成功(affectedRows:影响的行数)
                ctx.body = {
                    code: 800,
                    msg: '添加成功',
                    data: 'success'
                    
                }
            }else{//添加失败
                ctx.body = {
                    code: 802,
                    msg: '添加失败',
                    data: 'error'
                }
            }
        }catch(error){
            ctx.body = {
                code:814,
                data:error,
                msg:'服务器异常'
            }
        }
    }



})



module.exports = router