// 控制层/路由处理层代码，解析request请求的参数，做一些合法性的校验，如果参数不合法，直接向表示层响应异常状态码。如果参数合法，异步调用Service业务层
var express = require('express');
var router = express.Router();
const userService = require("../service/userService");

// 添加用户
router.post('/addUser', async function (req, res) {
  // 读取请求参数数据
  const {username, password} = req.body
  const data = await userService.addUser(username, password);
  res.send(data);
})

// 获取所有用户列表
router.get('/getAllUsers', async function (req, res) {
  const data = await userService.getAllUsers();
  res.send(data);
});

// 更新用户
router.post('/updateUser', async function (req, res) {
  const {username, password} = req.body
  const data = await userService.updateUser(username, password);
  res.send(data);
})

// 删除用户
router.post('/deleteUser', async function (req, res) {
  const {username} = req.body
  const data = await userService.deleteUser(username);
  res.send(data);
})

// 登录
router.post('/login', async function (req, res) {
  const {username, password} = req.body
  const data = await userService.login(username, password);
  res.send(data);
})

module.exports = router;