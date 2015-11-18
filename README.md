# esnext-workflow-example
esnext-workflow-example

## 如何使用？

### 安装 nodejs 环境，然后全局安装`gulp`

```shell
npm install -g gulp
```

### 安装依赖

```shell
npm install
```

### 按需修改 gulpfile.js 文件配置

```javascript
// 编译 'src-esnext' 目录下的文件到 'src' 目录下，
var from = path.join(__dirname, 'src-esnext')
var to = path.join(__dirname, 'src')
```

### 启动 gulp

`gulp folderName`，folderName 是 `src-esnext` 目录下的文件夹名

```shell
gulp detail
```

启动后，编辑 `src-esnext/detail` 目录下的 `.js 文件`，将自动用 `babel` 编译到 `src/detail` 目录下，是新文件则新增，已存在的文件将覆盖。 

gulp 会 `watch` 文件修改然后自动编译，无须重新启动（长时间 watch 时，gulp 程序有可能静默，此时需要 foucs 命令行窗口，激活 gulp）。
