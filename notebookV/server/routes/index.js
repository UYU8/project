const userRouter = require('./user') 
const noteRouter = require('./note')

function useRouter(app){
    app.use(userRouter.routes())
    app.use(userRouter.allowedMethods())
    app.use(noteRouter.routes())
    app.use(noteRouter.allowedMethods())
}

module.exports = useRouter
