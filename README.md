##  安装 node-dev
   `yarn global add node-dev`
    
## server.js运行
`node-dev server.js 8888`

### 简单的动态服务器

</br>
</br>

#### 目标1

* 实现用户注册功能

用户提交用户名和密码

users.json里就新增了一行数据

* 思路

前端写一个 form,让用户填写name和password

前端监听submit事件

前端发送post请求，数据位于请求体

后端接收post请求

后端获取请求体中的name和password

后端存储数据

<a href="http://nodejs.cn/api/buffer.html">Buffer</a>

#### 目标2
* 实现用户登录功能

首页home.html，已登录用户可看到自己用户名

登录页sign_in.html，供提交用户名和密码

输入的用户名密码如果是匹配的，就自动跳转首页

* sign_in.html思路

前端写一个 form,让用户填写name和password

前端监听submit事件

前端发送post请求，数据位于请求体

后端接收post请求

后端获取请求体中的name和password

后端读取数据,看是否有匹配的name和password

如果匹配，后端应标记用户已登录，可是怎么标记?

* 目标2受阻，目标太大了

目标应该尽量小

#### 目标3

标记用户已登录

如何识别用户是已登录还是没登录的

#### Cookie

用到Cookie

* 定义

Cookie是服务器下发给浏览器的一段字符串

浏览器必须保存这个Cookie(除非用户删除)

之后发起<b>相同二级域名</b>请求(任何请求)时，浏览器必须附上Cookie

* 以公园门票作为对比

假如你是公园检票员，你怎么知道谁能进谁不能进?

有票能进，没票不能进

**Cookie就是门票**

有Cookie就是登录了，没Cookie就没登录

那后端给浏览器下发一个Cookie不就完事了嘛


#### Set-Cookie 响应头

通过Set-Cookie设置cookie

语法看<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie">MDN文档</a>


#### home.html怎么知道登录的是谁呢

把logined 改成user_id

#### 目标4

* 显示用户名

home.html渲染前获取user信息

如果有user，则将{{user.name}}替换成user.name

如果无user，则显示登录按钮


#### 有一个大bug

用户可以篡改user_id 啊啊啊!

开发者工具或者JS都能改

#### 目标5:防篡改user_id

* 思路一:加密

将user_id加密发送给前端，后端读取user_id时解密，此法可行，但是有安全漏洞


漏洞:加密后的内容可无限期使用

解决办法:JWT

* 思路二:把信息隐藏在服务器

把用户信息放在服务器的x里，再给信息一个随机 id

把随机 id发给浏览器

后端下次读取到id时，通过x\[id\]获取用户信息

想想为什么用户无法篡改id(因为id很长，而且随机)

x是什么?是文件。不能用内存，因为断电内存就清空

这个×又被叫做session(会话)
