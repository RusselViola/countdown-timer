const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(
      <CountdownForm
        onSetCountdown={spy}
      />
    );
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });
});
