#开发规范
- 所有接口必须经过测试通过并且在[YAPI](http://yapi.restoplus.cn/)完成接口文档才能交付上线
- 所有接口请求规范 查询:GET,创建:PUT,更新:POST，DELETE:移除
- 程序变量一律使用英文驼峰方式命名，禁止出现汉语拼音和错误的英语单词
- 接口变量命名使用下划线("_")进行单词分割，禁止出现汉语拼音和错误的英语单词
- 除非特殊需要，代码中一律不能保留console.log或者其他debug信息
- Tab占用4个空格
- 代码行末尾一律添加分号(;)
- 变量使用 let 声明，禁止再使用var声明
- 包引用和常量一律使用 const 声明，禁止再使用var声明

#所使用的主要技术
- express.js API框架
- socket.js 实时通信框架
- sequelize.js sqlite在node.js下的ORM框架


#项目结构
- bin 程序的启动入口
- config 配置文件存放地
- controller 控制器
- lib 所有自定义模块
- middlware 全局中间件
- model 业务模型层
- service 底层服务
- resource 资源存放地
- router 路由映射

#####指令说明添加子模块及主程序依赖
- npm install

#####数据初始化
- 在service/config  文件下配置好


#程序启动

####NODE_ENV环境变量，控制加载配置
#####参数说明
- NODE_ENV存在三种值，"dev"/"pre"/"pro"
- dev 表示加载开发环境配置，对应的文件是 /config/dev/index.js
- pre 表示加载预发布环境配置，对应的文件是 /config/pre/index.js
- pro 表示加载生产环境配置，对应的文件是 /config/pro/index.js

#####使用方式
- npm run dev #开发环境
- npm run build #打包前端
- npm run pre #测试环境
- npm run pro #生产环境

#####exe环境
- npm install --production  ,只安装dependencies而不安装devDependencies





##### 项目编译 常用命令
- 使用 sqlite3 
npm install sqlite3 --save
npm install electron-rebuild --save
./node_modules/.bin/electron-rebuild -v 3.0.2

3.0.2 是当前环境下 electron 的版本号，一定要对应


