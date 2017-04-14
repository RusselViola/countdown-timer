import React from 'react';
import ReactDOM from 'react-dom';
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');
import Clock from 'Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
});
