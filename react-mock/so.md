#在parcel搭建得recat项目中  使用 mobx 完成todolist     rcc  rscp


1 安装  npm mobx  mobx-react
        npm i --save-dev babel-plugin-transform-decorators-legacy (使用装饰器)
        并且在你的 .babelrc 配置文件开启
        {
            "presets": ["env", "react", "es2015","stage-1"],
            "plugins": ["transform-decorators-legacy" ,"transform-decorators"]
        }
        npm i babel-preset-es2015
        npm  i  babel-plugin-transform-decorators
        npm  i react-router-dom  

2 使用todomvc使用的样式
  yarn add todomvc-app-css