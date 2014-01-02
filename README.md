Bootplate v1.2.1
=========
Bootplate 是一个 Sencha Touch 模板。使用这个模板可以在没有 Sencha CMD 的情况下，建立标准的应用。

安装方法
---------
### 前置条件 ###
- git http://git-scm.com/
- Node.js http://nodejs.org/
- grunt-cli (npm install -g grunt-cli)

### 初始化项目 ###
```bash
git clone https://github.com/gengen1988/bootplate.git
cd bootplate
npm install
```
一旦安装完成，你可以把 ```bootplate``` 导入 Eclipse 进行开发。

使用方法
---------
### 运行调试服务器 ###
```bash
grunt
```

### 包管理 ###
```
grunt install:<包名>     # 自动安装新包
grunt remove:<包名>      # 自动删除已有的包
grunt ls                 # 列出已经安装的包
grunt delete:<包名>      # 手动删除已经下载的内容
grunt download:<包名>    # 手动下载包
grunt register:<包名>    # 手动建立包与应用的关系
grunt unregister:<包名>  # 手动移除包与应用的关系
grunt refresh            # 手动刷新应用
```

可用包
---------
- etframework


可用插件
---------
- BarcodeScanner https://github.com/wildabeast/BarcodeScanner

Changelog
----------
2013-12-24 v1.2.1
- FIX: 修正包管理器不会刷新的问题
- MOD: 修改手动注册包为注册表文件，随每次发版更新
- MOD: 移除 repo 指令
- ADD: 增加手动包管理指令

2013-11-29 v1.2.0
- MOD: 开发由工作空间模式转为项目模板模式
- MOD: 精简文件，去除 touch 直接引用
- MOD: 去除对 Sencha Cmd / Cordova / Android SDK 的依赖
- ADD: 加入 Github
- ADD: 加入 Eclipse 项目文件
- ADD: 加入 grunt 管理
