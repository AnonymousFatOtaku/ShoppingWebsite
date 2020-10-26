// 用户DAO，只负责数据库操作

// 获取所有用户列表
const getUsers = async () => {
  let sql = 'SELECT username,phone,email,login_time FROM t_user WHERE is_delete = 0'
  const data = connection.query(sql)
  return data
}

module.exports = {getUsers}