'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var war  = yeoman.generators.Base.extend({
  // 构造函数
    constructor:function () {
      // 调用父类构造函数
      yeoman.generators.Base.apply(this,arguments);
      // 执行的时候接收 `--coffee` 参数
      this.option('coffee');
    },
    method1: function () {
      console.log('方法一');
    },
    method2: function () {
      console.log('方法2');
    }
});

require("./src/prompts")(war);

module.exports = war;
