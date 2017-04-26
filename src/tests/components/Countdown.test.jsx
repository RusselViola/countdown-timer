import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'Clock';

const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });
});
