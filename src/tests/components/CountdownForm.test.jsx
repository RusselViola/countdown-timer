const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  })
})
