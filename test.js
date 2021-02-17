const fs = require("fs");

// 读数据库
const usersString = fs.readFileSync("./db/users.json").toString();
//toString()函数用于将当前对象以字符串的形式返回。
const usersArray = JSON.parse(usersString);

// 写数据库
const user3 = {id:3, name:'tom', password: 'yyy'}
usersArray.push(user3)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)