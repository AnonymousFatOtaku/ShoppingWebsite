// 控制层/路由处理层代码，解析request请求的参数，做一些合法性的校验，如果参数不合法，直接向表示层响应异常状态码。如果参数合法，异步调用Service业务层
var express = require('express');
var router = express.Router();
const userService = require("../service/userService");

router.get('/getUsers', async function (req, res) {
  const pager = req.query;
  const data = await userService.getUsers(pager);
  res.send(data);
});

module.exports = router;