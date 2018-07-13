/* eslint-disable quotes */
/* eslint-disable no-template-curly-in-string */

const rule = require('../lib/rules/uppercase');
const msg = require('../lib/message');
const {RuleTester} = require('eslint');

const ruleTester = new RuleTester({parserOptions: {ecmaVersion: 2017}});

const TYPE = 'VariableDeclaration';

ruleTester.run('const-uppercase', rule, {

    invalid: [
        {
            code: `
            const { INVALID, ALSO_INVALID } = require('./constants');
            const { INVALID3, ALSO_INVALID3 } = require('./constantss');
            `,
            errors: [{TYPE, message: msg.upper}]
        }
    ],

    valid: [
        // "const foo = `bar ${baz} qbar`"
    ]
});
