# Vue PWA App

这是一个使用 Vue.js 构建的渐进式 Web 应用程序 (PWA)。该应用程序包含四个主要标签：消息、会议、工作流和更多，旨在提供一个用户友好的界面来管理和查看相关内容。

## 项目结构

```
vue-pwa-app
├── public
│   ├── index.html          # 应用的主 HTML 文件
│   ├── manifest.json       # PWA 的清单文件
│   └── service-worker.js    # 服务工作线程的脚本
├── src
│   ├── assets              # 存放静态资源
│   ├── components          # Vue 组件
│   │   ├── BottomNav.vue   # 底部导航组件
│   │   ├── MessageTab.vue   # 消息标签组件
│   │   ├── MeetingTab.vue   # 会议标签组件
│   │   ├── WorkflowTab.vue  # 工作流标签组件
│   │   └── MoreTab.vue      # 更多标签组件
│   ├── views               # 视图组件
│   │   ├── MessageView.vue  # 消息视图组件
│   │   ├── MeetingView.vue  # 会议视图组件
│   │   ├── WorkflowView.vue # 工作流视图组件
│   │   └── MoreView.vue     # 更多视图组件
│   ├── App.vue             # 应用的根组件
│   ├── main.ts             # 应用的入口文件
│   └── router              # 路由配置
│       └── index.ts        # 路由配置文件
├── package.json            # npm 配置文件
├── tsconfig.json           # TypeScript 配置文件
└── README.md               # 项目文档
```

## 安装和使用

1. 克隆该项目到本地：
   ```
   git clone <repository-url>
   ```

2. 进入项目目录：
   ```
   cd vue-pwa-app
   ```

3. 安装依赖：
   ```
   npm install
   ```

4. 启动开发服务器：
   ```
   npm run serve
   ```

5. 打开浏览器访问 `http://localhost:8080` 查看应用。

## 特性

- 渐进式 Web 应用 (PWA) 支持
- 响应式设计，适配各种设备
- 四个主要功能标签：消息、会议、工作流和更多
- 离线支持和缓存策略

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

该项目使用 MIT 许可证。