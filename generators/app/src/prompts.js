/**
 * 作者:war
 * 时间:16/3/25
 * 内容: 提供供用户选择
 */
'use strict';

var prompts = require('../prompts.json'); //引入问题配置的json
var _ = require('lodash');//一个具有一致接口、模块化、高性能等特性的 JavaScript 工具库

module.exports = function (war) {
    /**
     * Ask all questions from prompts.json
     * Add conditional tests on those depending on first responses
     * Complete responses with null answers for questions not asked
     */
    war.prototype.askQuestions = function askQuestions() {
        // if (this.skipConfig || this.options.default) {
        //     return;
        // }

        var done = this.async();

        _.findWhere(prompts, {name: 'bootstrapComponents'}).when = function (props) {
            return props.ui.key === 'bootstrap';
        };

        _.findWhere(prompts, {name: 'foundationComponents'}).when = function (props) {
            return props.ui.key === 'foundation';
        };

        this.prompt(prompts, function (props) {
            console.log(props)
            if (props.ui.key !== 'bootstrap') {
                props.bootstrapComponents = {
                    name: null,
                    version: null,
                    key: null,
                    module: null
                };
            }

            if (props.ui.key !== 'foundation') {
                props.foundationComponents = {
                    name: null,
                    version: null,
                    key: null,
                    module: null
                };
            }

            this.props = _.merge(this.props, props);

            done();
        }.bind(this));
    };

};