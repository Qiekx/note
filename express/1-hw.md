# title:上手 Express 框架


前面课程中介绍了 React ，React 是一个 **前端框架** ，前端框架是运行在浏览器环境下的，负责 UI （User Interface 用户界面）。

但是，如果只有UI ，那么用户需要的数据从哪里来？用户需要的保存的数据如何进行运算之后保存到数据库中？这部分的功能就需要后端代码来完成。今天我们要介绍的 Express 就是一个后台框架。

我们可能知道，当下实现后台服务，最流行的方式就是使用 Node.js ，Express 就是Nodejs的一个框架，而且是 Nodejs各种后台框架中最为通用，最为流行的一个，没有之一。所以学习 Nodejs 最佳途径就是从 Express 入手。


### 你好 Express

Express 的官网是 ：http://www.expressjs.com.cn/ 。  官网上，首页最能吸引我们注意的 就是 **API** 这个关键字。API 是**应用开发接口**，简称 **接口**  。而Express 就是用来制作后台接口的，或者说叫制作后台 API 。

那么之后，我们整个项目的架构，就是用 Express 来制作后台 API ，这些 API 的使用者就是前台 React 代码。

### Hello Worl

动手练习 Express。

第一步，要新建文件夹，并把他初始化为一个 Nodejs 项目：

```

mkdir express-hello
cd express-hello
npm init -y

```


这样文件夹内就会生成 一个 package.json 文件，有了文件，这个文件夹就可以叫做一个 **Nodejs 项目** 了。


### 补充知识：框架，库，工具

- 工具：就是完成特定的一个小功能的软件，比如 Nabel
- 库：英文叫 lib，我们每天 import 的东西，都是库。库是把一系列相关工具，组织到一起。例如：lodash，react。库里面的东西虽然多，但是都是干一类工作的。
- 框架：英文 framework ，是把很多类功能的工具和库集合到一起，目的是完成整个项目。例如：RubyOnRails，Django， J2EE， React + friends， Angular， Meteor 。

### 继续 Express 的 Hello Word

下一步，进行装包

```
npm install --save express

```

小贴士：一个常见的装包错误，如果我们的项目文件夹名和要装的包同名，例如：

```

mkdir express
cd express
npm init -y
npm install --save express

```

安装就会失败，报错信息为：

```

Refusing to install express as a dependency of itself
```

解决方法就是：修改项目文件夹名。

小贴士结束


### 写代码，用ES6？

我们的前台代码，因为有Babel 的支持，可以全部采用 ES6 来写。后台代码，我们会让他直接运行在Nodejs之上，不用Babel （当然也可以用，但是配置比较麻烦）。

如果我们到 Node.Green 网站上，可以看到新版本的 Nodejs （7.0 版本以上）对于 ES6 语法的支持已经到了99%.所以，不用Babel 我们也可以直接使用 Es6 语法，但是唯一要注意的就是 不能用 import （也就是说Nodejs 不部支持ES6 模块语法的）。我们的后台代码暂时用 require来替代 import 。require 用的是commonjs 模块语法，这个是 Nodejs 原生支持的。

最终结论，ES6 可以用。



### 真正的Hello　World 来了

官网参考：http://www.expressjs.com.cn/starter/hello-world.html

到项目中创建一个

```js
const express = require ('express');
const app = express();

app.listen(3000);

```

上面三句代码，我们就自己实现了一个   **服务器**   （server）。服务器（这里指的是软件）的作用是，始终监听客户端的请求，或者说前端不给服务器发信号，服务器就什么都不做，但是也不死，只是去循环执行，或者就叫始终在监听（listen）。

上面的`3000` 指的是 **3000端口** ，端口的英文是 port ，一个服务器好比一个大厦，有很多个门，3000是其中一个一个门牌号。


小贴士：const和let的区别，目前只需记住，const 是只读变量，let 使可以修改的变量。

小贴士结束。


上面的程序执行，就到后台运行

```
node index.js
```

因为我们写的 index.js 是一个 Nodejs 程序，所以用 node 命令去执行，这个执行过程跟浏览器已经脱离了。这也基本上到目前为止，唯一一个可以脱离浏览器的JS程序。

但是，现在运行的效果，很不让人舒服，因为没有输出内容，解决这个问题，我们就可以把 app.listen 部分修改成下面这样：

```js

app.listen(3000,function(){
  console.log('running on port 3000...');
});

```

这样，后台执行的效果就是

```
$node index.js
running on port 3000.
```

用户体验好了很多。上面添加的无名函数`function(){...}` 在这里的作用是 **回调函数**（callback function).

小贴士：什么是回调函数？

回调函数是我们写 JS 程序，最常见的功能之一。程序就会先执行一个操作，执行完这个操作后，回过头来要调用那个函数，就叫回调函数。

一般格式如下：

```js
app.listen(3000,function(){

  });
```

一般回调函数的场合就是，之前的一个操作耗时比较长（或者是异步操作）这样的情况下使用回调函数。大家暂时不必深究，异步操作未来会成为大家的必备知识。


### Express 服务器运行起来了，so what？

服务器监听端口后，唯一的作用就是来根据端口传入的请求，来执行特定的代码。

比如：我们在上面的 index.js中，app.listen语句的上面，添加如下代码：

```
app.get('/',function(){
  console.log('request come in ...');
})
```

上面代码中`get('/')`这是什么？

- get 是一个 http 请求的 **动词**，类似的还有 post/delete/put。
- '/'是一个  **路径**   ，英文 path.


一个动词添加一个路径，这样就组成了一个 **HTTP 请求**，公式如下

```
request = verb +path + data

```

但是，这里的请求，不是 **发出请求** ，而是 **接收请求**。


### 现在来发客户端请求

现在我们需要的客户端请求是，一个

```
GET /

```

同时这个请求，必须来自3000端口。


可以发请求的方式不唯一，可以用浏览器地址栏，可以用页面的 form 发，也可以用 axios 发，后者使用专门的 API 调试工具 curl/postmam 来发。

postman 是一个辅助工具，用他的目的就是美观方便，但是 postman 需要用到 谷歌的服务，所以需要我们的机器翻墙才可以。

小贴士：翻墙方式：

- 免费的 ：https://load.cn
- peter 用：https://agentwho.rocks

小贴士结束。


现在，我们就用浏览器的地址栏来发请求。地址栏中输入：

```

http://localhost:3000/

```

上的请求，默认的动词就是 GET ，同时，`：3000`用来指定端口号。

请求之后，会发现浏览器里没有任何输出，这是因为，我们的 express 服务器根本就没有给前台返回任何字符串，回调函数中的`console.log()`,字符串只能在后台输出。



### 前端和后端

前端，font-end，或者也可以叫前台。后端，back-end，也可以叫后台。

前端指的是具体运行环境是什么呢？对于我们web 开发者来说，就是浏览器。注意，浏览器是用户安装在自己的机器上，也就是说前端代码运行在我们自己的笔记本或者 ipad 上，如果前端代码写的烂，那么考验的是我们自己的设备的内存大小。

后端代码运行环境是?是一个放在人家机房里的刀片机。上面运行 Linux 操作系统。刀片机根本就没有显示器，当然也不能跑浏览器。所以后端代码的运行时脱离浏览器的。如果后端写的烂，那么就是考虑的刀片机的内存够不够了。


然后，再从API 的角度来聊聊。前端是API 的消费者，后端是API 的生产者。后台API 写好之后，默认不运行，只有当前端发送过来请求的时候才会发出后台 API 代码的运行。

当然，在平常开发的时候，我们并没购买刀片机，所以只能用自己的电脑当刀片机来用了。这时候基本认为 EXPRESS 写的代码就是后端代码，react 写的代码就是前端代码。


### 继续前面的代码：返回字符串

前面的回调函数中，console.log打印字符串，只是出现在后端（服务器）。前端得不到任何反馈。所以我们可以把代码做如下修改：

```
app.get('/',function(req,res){
  res.send('hello world')
})

```

上面的代码中`req`是request  **请求** 的简写，res是response **响应** 的简写。`res.send('Hello World');`的作用是从后端向前端返回字符串`Hello World` 。



### 总结


到这里，我们一个Express 的 Hello World API 就制作完毕，我们只需掌握的概念分别是：

- 前端和后端的区别
- API 基本格式
- Express 使用方式


### 全部代码

package.json 如下：

```json
{
  "name": "express-hello",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.14.0"
  }
}
```

index.js 代码如下

```js
const express =  require('express');
const app = express();


// 下面三行就是我们实现的一个 API
app.get('/', function(req, res){
  res.send('Hello World');
})

app.listen(3000, function(){
  console.log('running on port 3000...');
});
```

上面两个文件都放在一个 express-hello 文件夹中，然后

```
cd express-hello
npm install
node index.js
```

就可以把代码运行起来了。
