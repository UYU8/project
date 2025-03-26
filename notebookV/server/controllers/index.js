// 打造一个可以连接数据库的方法

const mysql = require('mysql2/promise')
const { database } = require('../config/index')

// 创建连接池，设置连接池的参数
const pool = mysql.createPool({
    host: database.HOST,
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    port: database.PORT,
    connectionLimit: 10
});

// 可以连接数据库的方法
const allService = {
    async query(sql){
        try{
        //通过连接池来创建连接
        const conn = await pool.getConnection()
        // 对连接执行某些操作
        const [rows,err] = await conn.query(sql)
        // 不要忘记释放连接！
        pool.releaseConnection(conn);
        
        return Promise.resolve(rows)
        }catch(err){
            return Promise.reject(err)
        }
    }
}

// 登录
const userLogin = (username,password) => {
    const _sql = `select * from users where username="${username}" and password="${password}";`
    return allService.query(_sql)
}
const userFind = (username) => {
    const _sql = `select * from users where username="${username}";`
    return allService.query(_sql)
}
const userRegister = (username,password,nickname) => {
    const _sql = `insert into users (username,password,nickname) values ("${username}","${password}","${nickname}");`
    return allService.query(_sql)
}
const findNoteListByType = (note_type,id) => {
    const _sql = `select * from note where note_type="${note_type}" and userId="${id}";`
    return allService.query(_sql)
}
const findNoteDetail = (id) => {
    const _sql = `select * from note where id="${id}";`
    return allService.query(_sql)
}
const notePublish = (values) => {
    const _sql = `insert into note (
        title, 
        note_type, 
        note_content, 
        head_img, 
        c_time, 
        m_time, 
        userId, 
        nickname) values("${values.title}", "${values.note_type}", "${values.note_content}", "${values.head_img}", "${values.c_time}", "${values.m_time}", "${values.userId}", "${values.nickname}");`
    
    return allService.query(_sql)
  }

module.exports = {
    userLogin,
    userFind,
    userRegister,
    findNoteListByType,
    findNoteDetail,
    notePublish
}