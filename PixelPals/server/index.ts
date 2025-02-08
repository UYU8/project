import Koa from 'koa';
import Router from 'koa-router';
import axios from 'axios';
import bodyParser from 'koa-bodyparser';

// 定义应用和路由实例
const app = new Koa();
const router = new Router();

// 添加跨域支持的中间件
app.use(async (ctx, next) => {
  console.log('--------- 跨域中间件');
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');

  if (ctx.method === 'OPTIONS') {
    ctx.status = 204;
    return;
  }

  await next();
});

// 启用 body 解析中间件
app.use(bodyParser({}));

// 定义根路由
router.get('/', async (ctx) => {
  ctx.body = JSON.stringify({
    a: 1
  });
});

// 定义 chatai 路由处理 POST 请求
router.post("/chatai", async (ctx) => {
  // 验证请求体是否为对象并且包含 message 字段
  const body = ctx.request.body as { message?: string };

  if (typeof body.message !== 'string') {
    ctx.status = 400;
    ctx.body = { error: 'Invalid request body. "message" field is required and must be a string.' };
    return;
  }

  const message = body.message.trim() || "";

  const data = {
    model: "deepseek-r1:1.5b",
    messages: [
      {
        role: "user",
        content: message
      }
    ],
    stream: false
  };

  try {
    const response = await axios.post("http://localhost:11434/api/chat", data);
    ctx.body = {
      code: 200,
      content: response.data.message.content
    };
  } catch (error) {
    console.error(error);
    ctx.status = 500;
    ctx.body = { error: 'An error occurred while processing your request.' };
  }
});

// 挂载路由到应用
app.use(router.routes());

// 监听端口
app.listen(3000, () => {
  console.log("server is running at port 3000");
});