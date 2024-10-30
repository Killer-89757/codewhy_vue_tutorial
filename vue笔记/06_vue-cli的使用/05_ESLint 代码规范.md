## ESLint 代码规范

在创建的时候我们选择 eslint的选项是yes，同时选择规范是Standard

![企业微信截图_20210907112640](images\企业微信截图_20210907112640.png)

创建完成之后，项目整体会多出来两个文件

![企业微信截图_20210907113330](images\企业微信截图_20210907113330.png)

验证在eslint的模式下，代码不规范，按ctrl + s进行保存，会报错

- npm run dev(以server的形式进行启动)

  ![动画1](images\动画1.gif)

- 通过一个函数的定义进行说明

  - 'sum' is defined but never used 定义了函数，没有使用报错
  - Missing space before function parentheses 在函数名称和参数之间 需要空格，没有空格报错
  - More than 1 blank line not allowed 超过了一个空行
  -  A space is required after ',' 参数中间，后面要有空格

  ![动画2](images\动画2.gif)

刚开始创建了eslint，但是后面不想使用，可以关闭

在config/index.js 中 useEslint:false

![企业微信截图_20210907115931](images\企业微信截图_20210907115931.png)