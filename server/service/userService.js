// 用户Service层，对Dao层发起异步DML操作
const userDAO = require("../dao/userDAO");

const getUsers = async (pager) => {
  let data = await userDAO.getUsers(pager)
  return data
}

module.exports = {getUsers}