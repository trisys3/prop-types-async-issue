'use strict';

exports.parser = 'babel-eslint';

exports.parserOptions = {ecmaVersion: 2018};

exports.plugins = ['react'];

exports.rules = {
  'react/no-unused-prop-types': 1,
  'react/prop-types': 1,
};
