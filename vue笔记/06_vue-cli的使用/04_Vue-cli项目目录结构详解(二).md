## Vue-cli项目目录结构详解(二)

### node_modules

- 当前项目依赖的很多node的包都放在node_modules中

```python
# 开发时依赖
"devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
}
```

```python
# 运行时依赖
"dependencies": {
   "vue": "^2.5.2"
}
```

### src源码文件夹

- main.js 和 .Vue的使用

![企业微信截图_20210907105114](images\企业微信截图_20210907105114.png)

### static 静态文件夹

- 我们将一些项目的静态文件可以放到static文件夹中，在项目打包的时候，static文件夹中的文件会原封不动的放到dist文件夹中
- 放到src中的文件，会根据url-loader、file-loader重命名文件，但是放在static中的文件不会

### .babelrc

- 将es6转化成es5

![企业微信截图_20210907105727](images\企业微信截图_20210907105727.png)

```python
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        # 只针对以下的浏览器起作用：市场份额大于1%,最新的两个版本，ie8以下不考虑
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime"]
}
```

### .editorconfig

```python
# 对于编码风格进行指定，保证编辑开发统一
root = true

[*]
charset = utf-8  # 编码：utf-8
indent_style = space  # 缩进：空格
indent_size = 2   # 缩进：2格
end_of_line = lf  # 结束符(换行)
insert_final_newline = true  # 在文件结尾插入一个新空行
trim_trailing_whitespace = true  # 去除尾部多余的空格
```

### .eslintignore

- 对指定的文件夹和文件不执行代码规范

### .postcssrc.js

```python
# 进行css转化的时候用到的插件，一般不需要更改
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
```

### index.html

```python
# 模板
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>01_vuecli</title>
  </head>
  <body>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>
```

### package.json

```python
{
  "name": "01_vuecli",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "waws",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-loader": "^7.1.1",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}

```

### package-lock.json

```python
# 只复制了一小部分，可以看到我们的项目中依赖包的详细的确定版本
# 在package.json中，我们使用^ or ~指定高于或不高于xx版本
# 在package-lock.json中是确定的依赖，列出了当前安装的版本信息
{
  "name": "01_vuecli",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@types/q": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@types/q/-/q-1.5.5.tgz",
      "integrity": "sha512-L28j2FcJfSZOnL1WBjDYp2vUHCeIFlyYI/53EwD/rKUBQ7MtUUfbQWiyKJGpcnv4/WgrhWsFKrcPstcAt/J0tQ==",
      "dev": true
    },
    "accepts": {
      "version": "1.3.7",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "dev": true,
      "requires": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      }
    },
    "acorn": {
      "version": "5.7.4",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-5.7.4.tgz",
      "integrity": "sha512-1D++VG7BhrtvQpNbBzovKNc1FLGGEE/oGe7b9xJm/RFHMBeUaUGpluV9RLjZa47YFdPcDAenEYuq9pQPcMdLJg==",
      "dev": true
    },
    "acorn-dynamic-import": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/acorn-dynamic-import/-/acorn-dynamic-import-2.0.2.tgz",
      "integrity": "sha1-x1K9IQvvZ5UBtsbLf8hPj0cVjMQ=",
      "dev": true,
      "requires": {
        "acorn": "^4.0.3"
      },
      "dependencies": {
        "acorn": {
          "version": "4.0.13",
          "resolved": "https://registry.npmjs.org/acorn/-/acorn-4.0.13.tgz",
          "integrity": "sha1-EFSVrlNh1pe9GVyCUZLhrX8lN4c=",
          "dev": true
        }
      }
    },
  }
}
```

