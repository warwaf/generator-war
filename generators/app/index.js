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
    },
    prompting: function () {
      var done = this.async();
      this.prompt({
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname // Default to current folder name
      }, function (answers) {
        this.log(answers.name);
        done();
      }.bind(this));
    }
});

module.exports = war;


// module.exports = yeoman.generators.Base.extend({
//
//   prompting: function () {
//     var done = this.async();
//
//     // Have Yeoman greet the user.
//     this.log(yosay(
//       'Welcome to the ultimate ' + chalk.red('') + ' generator!'
//     ));
//
//     var prompts = [{
//       type: 'confirm',
//       name: 'someOption',
//       message: 'Would you like to enable this option?',
//       default: true
//     }];
//
//     this.prompt(prompts, function (props) {
//       this.props = props;
//       // To access props later use this.props.someOption;
//
//       done();
//     }.bind(this));
//   },
//
//   writing: function () {
//     this.fs.copy(
//       this.templatePath('dummyfile.txt'),
//       this.destinationPath('dummyfile.txt')
//     );
//   },
//
//   install: function () {
//     this.installDependencies();
//   }
// });
